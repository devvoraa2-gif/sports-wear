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
          <div className="absolute top-4 right-[-60px] rotate-45 bg-white text-red-500 text-md font-semibold shadow flex items-center justify-center w-[180px] h-[30px]">
            {product.badge}
          </div>
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
          <Link
            to={`/product/${product.id}`}
            state={{ image: product.img }}
            className="w-full text-center rounded-xl border border-zinc-300 py-2 text-sm hover:bg-zinc-100"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
}
