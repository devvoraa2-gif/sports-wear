// FILE: src/pages/Catalog.jsx
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products.js";

// كمبوننتات العرض
import CategoryTabs from "../components/catalog/CategoryTabs.jsx";
import FiltersSidebar from "../components/catalog/FiltersSidebar.jsx";
import SortBar from "../components/catalog/SortBar.jsx";
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

  // تبويب/بحث
  const [active, setActive] = useState(initialCat);
  const [q, setQ] = useState("");

  // حدود الأسعار من الداتا
  const [priceMin, priceMax] = useMemo(() => {
    const prices = products.map((p) => p.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, []);
  const [minPrice, setMinPrice] = useState(priceMin);
  const [maxPrice, setMaxPrice] = useState(priceMax);

  // كل المقاسات المتاحة
  const allSizes = useMemo(() => {
    const s = new Set();
    products.forEach((p) => (p.sizes || []).forEach((sz) => s.add(sz)));
    return Array.from(s);
  }, []);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // ترتيب
  const [sortBy, setSortBy] = useState("relevance"); // price-asc | price-desc | name-asc

  // sync: لو جيتي من الهوم بـ ?cat=...
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && TABS.some((t) => t.key === cat)) setActive(cat);
  }, [searchParams]);

  // حدّث الURL لما يتغير التبويب
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

  // فلترة + ترتيب
  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (active === "all" || p.category === active) &&
        (q === "" || p.name.toLowerCase().includes(q.toLowerCase()))
    );

    // السعر
    list = list.filter(
      (p) =>
        p.price >= (Number(minPrice) || priceMin) &&
        p.price <= (Number(maxPrice) || priceMax)
    );

    // المقاسات (لو مختارة)
    if (selectedSizes.length > 0) {
      list = list.filter((p) => {
        const sizes = p.sizes || [];
        return selectedSizes.some((sz) => sizes.includes(sz));
      });
    }

    // الترتيب
    switch (sortBy) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name, "ar"));
        break;
      default:
        break; // relevance
    }

    return list;
  }, [products, active, q, minPrice, maxPrice, selectedSizes, sortBy, priceMin, priceMax]);

  const resetFilters = () => {
    setActive("all");
    setQ("");
    setMinPrice(priceMin);
    setMaxPrice(priceMax);
    setSelectedSizes([]);
    setSortBy("relevance");
  };

  const toggleSize = (sz) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  return (
  <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10 overflow-x-hidden relative">
        {/* شارة التصنيف */}
      {active !== "all" && (
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs">
          تصفية حسب: <span className="font-semibold">{TABS.find((t) => t.key === active)?.label}</span>
        </div>
      )}

      {/* العنوان + التبويبات + البحث */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold tracking-tight">المتجر</h1>
        <div className="flex items-center gap-2 flex-1 sm:flex-none">
          <CategoryTabs tabs={TABS} active={active} onChange={setActive} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث عن منتج"
            className="flex-1 sm:w-64 px-3 py-2 text-sm rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-300"
          />
        </div>
      </div>

      {/* تخطيط: فلاتر يسار + نتائج يمين */}
      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <FiltersSidebar
          allSizes={allSizes}
          selectedSizes={selectedSizes}
          onToggleSize={toggleSize}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          priceMin={priceMin}
          priceMax={priceMax}
          onReset={resetFilters}
        />

        <div>
          <SortBar count={filtered.length} sortBy={sortBy} onChangeSort={setSortBy} />
          <ResultsGrid products={filtered} />
        </div>
      </div>
    </section>
  );
}
