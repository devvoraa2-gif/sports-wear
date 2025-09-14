// FILE: src/components/catalog/FiltersSidebar.jsx
export default function FiltersSidebar({
  allSizes,
  selectedSizes,
  onToggleSize,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  priceMin,
  priceMax,
  onReset,
}) {
  return (
    <aside className="space-y-6">
      {/* السعر */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-4">
        <div className="font-semibold mb-3">السعر</div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={priceMin}
            max={maxPrice}
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300"
            placeholder={`من ${priceMin}`}
          />
          <span className="text-xs text-zinc-500">إلى</span>
          <input
            type="number"
            min={minPrice}
            max={priceMax}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-300"
            placeholder={`حتى ${priceMax}`}
          />
        </div>
      </div>

      {/* المقاس */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-4">
        <div className="font-semibold mb-3">المقاس</div>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((sz) => (
            <button
              key={sz}
              onClick={() => onToggleSize(sz)}
              className={`px-3 py-2 text-sm rounded-xl border ${
                selectedSizes.includes(sz)
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 hover:bg-zinc-100"
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full px-4 py-2 rounded-xl border border-zinc-300 hover:bg-zinc-100 text-sm"
      >
        إعادة ضبط الفلاتر
      </button>
    </aside>
  );
}
