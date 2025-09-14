// FILE: src/pages/Checkout.jsx
import { Link } from "react-router-dom";
import { useCheckout } from "../components/checkout/useCheckout";
import CheckoutForm from "../components/checkout/CheckoutForm";
import VodafoneCashBox from "../components/checkout/VodafoneCashBox";
import CheckoutSummary from "../components/checkout/CheckoutSummary.jsx";

export default function Checkout() {
  const {
    items, subtotal, shipping, prepayNeeded, remainingOnCourier,
    form, setForm, cash, setCash, agree, setAgree,
    canPlace, placeOrder,
  } = useCheckout();

  if (items.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold">السلة فاضية</h1>
        <p className="text-zinc-600 mt-2">ضيفي منتجات وبعدين كمّلي الطلب.</p>
        <Link to="/catalog" className="inline-block mt-4 px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">
          الرجوع للمتجر
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <h1 className="text-2xl font-bold tracking-tight mb-6">إتمام الشراء</h1>

      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div className="space-y-6">
          <CheckoutForm form={form} setForm={setForm} />

          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold mb-4">تأكيد الطلب بدفع الشحن</h2>

            {prepayNeeded === 0 ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 text-sm">
                طلبك مؤهل <strong>لشحن مجاني</strong>. تقدري تعملي تأكيد للطلب مباشرة، والباقي يُدفع للمندوب.
              </div>
            ) : (
              <VodafoneCashBox
                payTo="0100 000 0000"
                amount={prepayNeeded}
                senderPhone={cash.senderPhone}
                txnId={cash.txnId}
                receipt={cash.receipt}
                onChange={setCash}
              />
            )}

            <label className="mt-4 flex items-start gap-2 text-sm text-zinc-700">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-zinc-300"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              أوافق على شروط الخدمة وسياسة الإرجاع.
            </label>

            <button
              onClick={placeOrder}
              disabled={!canPlace}
              className={`mt-4 w-full sm:w-auto px-6 py-3 rounded-xl text-white ${canPlace ? "bg-zinc-900 hover:bg-zinc-800" : "bg-zinc-400 cursor-not-allowed"}`}
            >
              تأكيد الطلب
            </button>
          </div>
        </div>

        <CheckoutSummary
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          prepay={prepayNeeded}
          cod={remainingOnCourier}
        />
      </div>
    </section>
  );
}
