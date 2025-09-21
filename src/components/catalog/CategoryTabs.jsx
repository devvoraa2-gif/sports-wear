// FILE: src/components/catalog/CategoryTabs.jsx
export default function CategoryTabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 rounded-xl p-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`px-3 py-1.5 text-md font-blod ${
            active === t.key ? "border-b-2 border-zinc-900" : ""
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
