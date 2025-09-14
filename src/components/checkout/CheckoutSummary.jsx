// FILE: src/components/checkout/CheckoutSummary.jsx
export default function CheckoutSummary({ items, subtotal, shipping, prepay, cod }) {
  return (
    <aside className="lg:sticky lg:top-20 h-fit rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">ملخّص الطلب</h2>

      <div className="space-y-3 text-sm">
        <Row label="قيمة المنتجات" value={`${fmt(subtotal)} جنيه`} />
        <Row label="الشحن" value={shipping === 0 ? "مجانًا" : `${fmt(shipping)} جنيه`} />
        <div className="border-t border-dashed border-zinc-300 my-2" />
        <Row label="المطلوب على فودافون كاش" value={`${fmt(prepay)} جنيه`} />
        <Row label="المتبقي للمندوب عند الاستلام" value={`${fmt(cod)} جنيه`} strong />
      </div>

      <div className="mt-5 space-y-2">
        {items.map((it) => (
          <div key={`${it.id}-${it.size || "no-size"}`} className="flex items-center gap-3 text-xs">
            <img src={it.img} alt={it.name} className="h-10 w-10 rounded-lg object-cover border border-zinc-200" />
            <div className="flex-1">
              <div className="font-medium truncate">{it.name}</div>
              <div className="text-zinc-500">{it.size ? `مقاس ${it.size} — ` : ""}الكمية: {it.qty}</div>
            </div>
            <div className="font-semibold">{fmt(it.price * it.qty)} جنيه</div>
          </div>
        ))}
      </div>
    </aside>
  );
}
function Row({ label, value, strong = false }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-600">{label}</span>
      <span className={strong ? "font-bold text-zinc-900" : "font-medium"}>{value}</span>
    </div>
  );
}
function fmt(n) {
  return new Intl.NumberFormat("ar-EG").format(Math.max(0, Math.round(n)));
}
