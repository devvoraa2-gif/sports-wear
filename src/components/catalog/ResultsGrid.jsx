// FILE: src/components/catalog/ResultsGrid.jsx
import ProductCard from "../ProductCard.jsx";

export default function ResultsGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 p-10 text-center text-zinc-500">
        مفيش منتجات مطابقة للفلاتر الحالية.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
