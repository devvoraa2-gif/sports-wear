// FILE: src/shared/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import MobileMenu from "./NavbarMobile.jsx";

export default function Navbar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const linkBase =   "relative text-sm px-2 py-1 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D61419] after:transition-all after:duration-300";
  const linkIdle =   "text-white after:content-['']";
  const linkActive = "text-white font-semibold after:w-full after:content-['']";

  return (
    <header className="sticky top-0 z-40 bg-black text-white p-1">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-12 rounded-xl bg-white text-black grid place-items-center text-sm font-bold">
            GW
          </div>
          <span className="font-semibold tracking-tight text-xl">Golden Wear</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            المتجر
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            عن البراند
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkIdle}`
            }
          >
            تواصل
          </NavLink>
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <button className="px-3 py-2 text-sm transition-colors duration-300 ease-in-out hover:text-[#D61419]">
            تسجيل الدخول
          </button>
          <Link to="/cart" className="px-3 py-2 text-sm text-white transition-colors duration-300 ease-in-out hover:text-[#D61419]">
            السلة ({count})
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          aria-label="فتح القائمة"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-zinc-300 hover:bg-zinc-100"
        >
          <span className="sr-only">قائمة</span>
          <div className="flex flex-col gap-1.5 rtl:scale-x-[-1]">
            <span className="h-0.5 w-5 bg-zinc-900"></span>
            <span className="h-0.5 w-5 bg-zinc-900"></span>
            <span className="h-0.5 w-5 bg-zinc-900"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu open={open} setOpen={setOpen} count={count} />
    </header>
  );
}
