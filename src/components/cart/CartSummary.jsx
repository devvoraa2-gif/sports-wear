// FILE: src/components/cart/CartSummary.jsx
import { Link } from "react-router-dom";

export default function CartSummary({ subtotal }) {
  const SHIPPING_THRESHOLD = 2000;
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : 60;
  const grandTotal = subtotal + shipping;

  return (
    <aside className="lg:sticky lg:top-20 h-fit rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">الملخّص</h2>

      <div className="space-y-3 text-sm">
        <Row label="قيمة المنتجات" value={`${fmt(subtotal)} جنيه`} />
        <Row
          label="الشحن"
          value={shipping === 0 ? <span className="text-emerald-600">مجانًا</span> : `${fmt(shipping)} جنيه`}
        />

        <div className="rounded-xl bg-zinc-50 border border-zinc-200 px-3 py-2 text-xs">
          {subtotal >= SHIPPING_THRESHOLD ? (
            <span className="text-emerald-700">مبروك! حصلتِ على شحن مجاني.</span>
          ) : (
            <span className="text-zinc-600">
              تبقّى <strong className="text-zinc-900">{fmt(SHIPPING_THRESHOLD - subtotal)}</strong> جنيه للحصول على شحن مجاني.
            </span>
          )}
        </div>

        <div className="border-t border-dashed border-zinc-300 my-2"></div>

        <div className="flex items-center justify-between text-base">
          <span className="font-semibold">الإجمالي</span>
          <span className="font-bold">{fmt(grandTotal)} جنيه</span>
        </div>
      </div>

      <Link
        to="/checkout"
        className="mt-5 block w-full text-center px-4 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800"
      >
        إتمام الشراء
      </Link>

      <p className="text-[11px] text-zinc-500 mt-3">
        بالضغط على إتمام الشراء فأنتِ توافقين على شروط الخدمة وسياسة الإرجاع.
      </p>
    </aside>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-zinc-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function fmt(n) {
  return new Intl.NumberFormat("ar-EG").format(Math.max(0, Math.round(n)));
}
