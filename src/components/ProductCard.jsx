// FILE: src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const toast = useToast();

  return (
    <div className="group rounded-3xl border border-zinc-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        {product.badge && (
          <span className="absolute right-3 top-3 text-[10px] tracking-wide bg-black text-white px-2 py-1 rounded-md">
            {product.badge}
          </span>
        )}
        <img
          src={product.img}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm line-clamp-1">{product.name}</h3>
          <span className="text-sm font-semibold">
            {new Intl.NumberFormat("ar-EG").format(product.price)} جنيه
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <Link
            to={`/product/${product.id}`}
            state={{ image: product.img }}
            className="w-full text-center rounded-xl border border-zinc-300 py-2 text-sm hover:bg-zinc-100"
          >
            التفاصيل
          </Link>
          <button
            onClick={() => {
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img,
                size: null,
                qty: 1,
              });
              toast.success("✔ تم إضافة المنتج إلى السلة");
            }}
            className="w-full rounded-xl bg-zinc-900 text-white py-2 text-sm hover:bg-zinc-800"
          >
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}
