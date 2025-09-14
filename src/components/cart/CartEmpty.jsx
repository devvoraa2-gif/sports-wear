// FILE: src/components/cart/CartEmpty.jsx
import { Link } from "react-router-dom";

export default function CartEmpty() {
  return (
    <section className="max-w-4xl mx-auto px-4 lg:px-8 py-20 text-center">
      <div className="mx-auto w-16 h-16 rounded-2xl bg-zinc-100 grid place-items-center text-2xl">🧺</div>
      <h1 className="text-2xl font-bold mt-4">السلة فاضية</h1>
      <p className="text-zinc-600 mt-2">ابدئي التسوّق لإضافة منتجاتك المفضّلة.</p>
      <Link
        to="/catalog"
        className="inline-block mt-6 px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800"
      >
        تصفّح المتجر
      </Link>
    </section>
  );
}
