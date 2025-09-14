// FILE: src/components/catalog/CategoryTabs.jsx
export default function CategoryTabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 rounded-xl bg-zinc-100 p-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-3 py-1.5 text-sm rounded-lg ${
            active === t.key ? "bg-white shadow border border-zinc-200" : "hover:bg-white"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
