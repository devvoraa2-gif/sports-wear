// FILE: src/components/checkout/useCheckout.js
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { useToast } from "../../context/ToastContext.jsx";

export function useCheckout() {
  const { items, subtotal, clear } = useCart();
  const toast = useToast();
  const navigate = useNavigate();

  const SHIPPING_THRESHOLD = 2000;
  const shipping = useMemo(() => (subtotal >= SHIPPING_THRESHOLD ? 0 : 60), [subtotal]);
  const prepayNeeded = shipping;          // المطلوب على فودافون كاش
  const remainingOnCourier = subtotal;    // الباقي للمندوب

  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", notes: "" });
  const [agree, setAgree] = useState(false);
  const [cash, setCash] = useState({ senderPhone: "", txnId: "", receipt: null });

  const canPlace =
    items.length > 0 &&
    form.name &&
    form.phone &&
    form.city &&
    form.address &&
    agree &&
    (prepayNeeded === 0 || (cash.senderPhone && cash.txnId));

  const placeOrder = () => {
    if (!canPlace) return;
    const order = {
      id: Date.now(),
      items,
      subtotal,
      shipping,
      prepay: prepayNeeded,
      cod: remainingOnCourier,
      customer: form,
      vodafoneCash: prepayNeeded ? { ...cash } : null,
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    try {
      const all = JSON.parse(localStorage.getItem("gw_orders") || "[]");
      all.push(order);
      localStorage.setItem("gw_orders", JSON.stringify(all));
    } catch {}
    clear();
    toast.success("✔ تم تسجيل الطلب. هنأكد معاكِ على واتساب/مكالمة");
    navigate("/");
  };

  return {
    items,
    subtotal,
    shipping,
    prepayNeeded,
    remainingOnCourier,
    form,
    setForm,
    cash,
    setCash,
    agree,
    setAgree,
    canPlace,
    placeOrder,
  };
}
