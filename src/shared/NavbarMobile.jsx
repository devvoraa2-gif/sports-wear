// FILE: src/shared/NavbarMobile.jsx
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function MobileMenu({ open, setOpen, count }) {
  const navigate = useNavigate();

  const closeAndNavigate = (to, end = false) => (e) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      navigate(to, { replace: false });
    }, 300); // matches transition duration
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85%] z-50
        bg-black text-white shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-zinc-700">
          <Link to="/" onClick={closeAndNavigate("/")}>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-yellow-400 grid place-items-center text-black text-sm font-bold">
                GW
              </div>
              <span className="font-semibold tracking-tight text-white">
                Golden Wear
              </span>
            </div>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="إغلاق القائمة"
            className="h-9 w-9 grid place-items-center text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="px-4 py-4 space-y-2">
          <NavItem to="/" end label="الرئيسية" onClick={closeAndNavigate("/")} />
          <NavItem to="/catalog" label="المتجر" onClick={closeAndNavigate("/catalog")} />
          <NavItem to="/about" label="عن البراند" onClick={closeAndNavigate("/about")} />
          <NavItem to="/contact" label="تواصل" onClick={closeAndNavigate("/contact")} />
        </nav>

        {/* Actions */}
        <div className="px-4 py-4 border-t border-zinc-700 grid gap-2">
          <button className="w-full px-3 py-2 text-sm rounded-xl border border-zinc-600 hover:bg-zinc-800 text-white transition-colors duration-200">
            تسجيل الدخول
          </button>
          <Link
            to="/cart"
            onClick={closeAndNavigate("/cart")}
            className="w-full text-center px-3 py-2 text-sm rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 font-semibold transition-colors duration-200"
          >
            السلة ({count})
          </Link>
        </div>
      </div>
    </>
  );
}

function NavItem({ to, label, end, onClick }) {
  const base =
    "block w-full text-right px-3 py-3 rounded-xl text-sm transition-colors";

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
