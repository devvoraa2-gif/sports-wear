// FILE: src/pages/Cart.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartSummary from "../components/cart/CartSummary.jsx";
import CartItem from "../components/cart/CartItem.jsx";
import CartEmpty from "../components/cart/CartEmpty.jsx";

export default function Cart() {
  const { items, subtotal, updateQty, removeItem, clear } = useCart();

  if (items.length === 0) return <CartEmpty />;

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">السلة</h1>
        <button onClick={clear} className="text-sm text-red-600 hover:text-red-700 underline">
          تفريغ السلة
        </button>
      </div>

      {/* RTL: نخلي الملخص على اليمين، العناصر على الشمال */}
      <div className="grid lg:grid-cols-[360px_1fr] gap-8">
        <CartSummary subtotal={subtotal} />

        <div>
          <div className="space-y-4">
            {items.map((it) => (
              <CartItem
                key={`${it.id}-${it.size || "no-size"}`}
                item={it}
                onInc={() => updateQty(it.id, it.size || null, it.qty + 1)}
                onDec={() => updateQty(it.id, it.size || null, it.qty - 1)}
                onRemove={() => removeItem(it.id, it.size || null)}
              />
            ))}
          </div>

          <div className="mt-6">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900">
              ← متابعة التسوّق
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
