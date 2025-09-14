// FILE: src/components/catalog/SortBar.jsx
export default function SortBar({ count, sortBy, onChangeSort }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-zinc-600">
        النتائج: <span className="font-semibold text-zinc-900">{count}</span>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm text-zinc-600">ترتيب:</label>
        <select
          value={sortBy}
          onChange={(e) => onChangeSort(e.target.value)}
          className="px-3 py-2 text-sm rounded-xl border border-zinc-300 bg-white"
        >
          <option value="relevance">الأكثر صلة</option>
          <option value="price-asc">السعر: من الأقل للأعلى</option>
          <option value="price-desc">السعر: من الأعلى للأقل</option>
          <option value="name-asc">الاسم: أ → ي</option>
        </select>
      </div>
    </div>
  );
}
