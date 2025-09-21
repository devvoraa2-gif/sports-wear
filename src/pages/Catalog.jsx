// FILE: src/pages/Catalog.jsx
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products.js";

// كمبوننتات العرض
import CategoryTabs from "../components/catalog/CategoryTabs.jsx";
import ResultsGrid from "../components/catalog/ResultsGrid.jsx";

const TABS = [
  { key: "all",      label: "الكل" },
  { key: "sneakers", label: "أحذية رياضية" },
  { key: "men",      label: "رجالي" },
  { key: "kids",     label: "أطفال" },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "all";

  const [active, setActive] = useState(initialCat);
  const [q, setQ] = useState("");

  // sync: لو جيت من الهوم بـ ?cat=...
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && TABS.some((t) => t.key === cat)) setActive(cat);
  }, [searchParams]);

  useEffect(() => {
    if (active === "all") {
      const sp = new URLSearchParams(searchParams);
      sp.delete("cat");
      setSearchParams(sp, { replace: true });
    } else {
      setSearchParams({ cat: active }, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const filtered = useMemo(() => {
    return products.filter(
      (p) =>
        (active === "all" || p.category === active) &&
        (q === "" || p.name.toLowerCase().includes(q.toLowerCase()))
    );
  }, [products, active, q]);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10 overflow-x-hidden relative">
      {/* العنوان + التبويبات + البحث */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-6">
        <CategoryTabs tabs={TABS} active={active} onChange={setActive} />

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ابحث عن منتج"
          className="w-full sm:w-64 px-3 py-2 text-sm rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-300 placeholder:text-zinc-400"
        />
      </div>

      {/* النتائج */}
      <div className="mb-4 text-md font-bold text-zinc-900">
        النتائج: {filtered.length}
      </div>
      <ResultsGrid products={filtered} />
    </section>
  );
}
