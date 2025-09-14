// FILE: src/pages/ProductDetails.jsx
import { useParams, Link, useLocation } from "react-router-dom";
import products from "../data/products.js";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useToast } from "../context/ToastContext.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  const location = useLocation();
  const overrideImg = location.state?.image;
  const [size, setSize] = useState(null);
  const { addItem } = useCart();
  const toast = useToast();

  if (!product) {
    return (
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <h1 className="text-xl font-bold mb-2">المنتج غير موجود</h1>
        <Link className="text-zinc-700 underline" to="/catalog">العودة للمتجر</Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <img
          src={overrideImg || product.img}
          alt={product.name}
          className="rounded-3xl border border-zinc-200 w-full"
        />

        <div>
          <h1 className="text-3xl font-extrabold">{product.name}</h1>
          <div className="mt-2 text-lg font-semibold">
            {new Intl.NumberFormat("ar-EG").format(product.price)} جنيه
          </div>
          <p className="mt-4 text-zinc-600">
            {product.description || "منتج رياضي عالي الجودة بخامات مريحة وأداء ممتاز."}
          </p>

          {product.sizes?.length ? (
            <div className="mt-6">
              <div className="text-sm font-semibold mb-2">المقاس</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 py-2 text-sm rounded-xl border ${
                      size === s ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-300 hover:bg-zinc-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <button
            onClick={() => {
              if (product.sizes?.length && !size) {
                alert("من فضلك اختاري مقاس أولاً.");
                return;
              }
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                img: overrideImg || product.img,
                size: size || null,
                qty: 1,
              });
              toast.success("✔ تم إضافة المنتج إلى السلة");
            }}
            className="mt-6 w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800"
          >
            أضف إلى السلة
          </button>

          <div className="mt-4">
            <Link to="/catalog" className="text-sm text-zinc-600 hover:text-zinc-900">
              عودة للمتجر
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
