// FILE: src/shared/NavbarMobile.jsx
import { NavLink, Link } from "react-router-dom";

export default function MobileMenu({ open, setOpen, count }) {
  const close = () => setOpen(false);

  return (
    <>
      {open && (
        <div
          onClick={close}
          className="md:hidden fixed inset-0 bg-black/60 z-[60]"
        />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85%] z-[70]
        bg-black text-white shadow-xl transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-zinc-700">
          <Link to="/" className="flex items-center gap-3" onClick={close}>
            <div className="h-9 w-9 rounded-xl bg-yellow-400 grid place-items-center text-black text-sm font-bold">
              GW
            </div>
            <span className="font-semibold tracking-tight text-white">Golden Wear</span>
          </Link>
          <button
            onClick={close}
            aria-label="إغلاق القائمة"
            className="h-9 w-9 rounded-lg border border-zinc-600 hover:bg-zinc-800 grid place-items-center text-white"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="px-4 py-4 space-y-2">
          <MobileLink to="/" end label="الرئيسية" onClick={close} />
          <MobileLink to="/catalog" label="المتجر" onClick={close} />
          <MobileLink to="/about" label="عن البراند" onClick={close} />
          <MobileLink to="/contact" label="تواصل" onClick={close} />
        </nav>

        {/* Actions */}
        <div className="px-4 py-4 border-t border-zinc-700 grid gap-2">
          <button className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-600 hover:bg-zinc-800 text-white">
            تسجيل الدخول
          </button>
          <Link
            to="/cart"
            onClick={close}
            className="w-full text-center px-3 py-2 text-sm rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
          >
            السلة ({count})
          </Link>
        </div>
      </div>
    </>
  );
}

function MobileLink({ to, label, end, onClick }) {
  const base = "block w-full text-right px-3 py-3 rounded-xl text-sm";
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `${base} ${
          isActive
            ? "bg-yellow-400 text-black font-semibold"
            : "text-zinc-200 hover:bg-zinc-800"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
