// FILE: src/components/cart/CartItem.jsx
export default function CartItem({ item, onInc, onDec, onRemove }) {
  const total = Number(item.price) * Number(item.qty);

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-4 sm:p-5 shadow-sm">
      {/* RTL ترتيب: الصورة على اليمين، البيانات شمال */}
      <div className="flex gap-4">
        <img
          src={item.img}
          alt={item.name}
          className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover border border-zinc-200 order-1"
        />

        <div className="flex-1 min-w-0 order-2">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold truncate">{item.name}</div>
              <div className="mt-1 text-sm text-zinc-500 flex flex-wrap items-center gap-3">
                <span>{fmt(item.price)} جنيه</span>
                {item.size ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-zinc-100 text-zinc-700">
                    مقاس: <strong className="font-medium">{item.size}</strong>
                  </span>
                ) : null}
              </div>
            </div>

            <button
              onClick={onRemove}
              className="text-sm text-zinc-500 hover:text-red-600"
              aria-label="إزالة المنتج"
              title="إزالة"
            >
              ✕
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="inline-flex items-center rounded-xl border border-zinc-300 overflow-hidden">
              <button onClick={onInc} className="h-9 w-9 grid place-items-center hover:bg-zinc-100" aria-label="زيادة الكمية">+</button>
              <div className="w-10 text-center select-none">{item.qty}</div>
              <button onClick={onDec} className="h-9 w-9 grid place-items-center hover:bg-zinc-100" aria-label="تنقيص الكمية">−</button>
            </div>

            <div className="text-right">
              <div className="text-xs text-zinc-500">المجموع</div>
              <div className="font-semibold">{fmt(total)} جنيه</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function fmt(n) {
  return new Intl.NumberFormat("ar-EG").format(Math.max(0, Math.round(n)));
}
