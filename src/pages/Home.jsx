// FILE: src/pages/Home.jsx
import { Link } from "react-router-dom";
import categories from "../data/categories.js";
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

// صور من assets
import heroImg from "../assets/img14.jpeg"; 
import aboutImg from "../assets/img2.jpeg"; 

// صور سكشن المختارات
import feat1 from "../assets/img4.jpeg";
import feat2 from "../assets/img5.jpeg";
import feat3 from "../assets/img6.jpeg";
import feat4 from "../assets/img7.jpeg"; 

export default function Home() {
  // بنجيب أول 4 منتجات من الداتا لكن نستبدل صورهم بالصور اللي عندنا
  const featured = products.slice(0, 4).map((p, i) => {
    const customImgs = [feat1, feat2, feat3, feat4];
    return { ...p, img: customImgs[i] || p.img };
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
              إصدار جديد: تشكيلة خريف 2025
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Golden Wear —{" "}
              <span className="text-zinc-500">قوة وأسلوب في كل حركة.</span>
            </h1>
            <p className="mt-4 text-zinc-600 max-w-xl">
              جولدن وير بتديك القوة والستايل في كل حركة، البراند اللي يخلي
              رياضتك شكل وأداء. مع جولدن وير كل خطوة أجرأ وأخف.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/catalog"
                className="px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800"
              >
                تسوّق الآن
              </Link>
              <a
                href="#categories"
                className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100"
              >
                تصفّح التصنيفات
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-zinc-500">
              <div>استرجاع مجاني خلال 7 أيام</div>
              <div>الدفع عند الاستلام (مصر)</div>
              <div>دفع آمن</div>
            </div>
          </div>

          <div className="relative">
            <img
              className="w-full rounded-3xl shadow-2xl"
              src={heroImg}
              alt="Golden Wear Hero"
            />
            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl px-4 py-3 text-sm border border-zinc-200">
              <div className="font-semibold">الأكثر مبيعًا</div>
              <div className="text-zinc-500">Velocity Runner</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12"
      >
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">
            تسوق حسب التصنيف
          </h2>
          <Link
            to="/catalog"
            className="text-sm text-zinc-600 hover:text-zinc-900"
          >
            عرض الكل
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/catalog?cat=${c.id}`}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{c.title}</h3>
                  <span className="text-xs text-zinc-500">{c.desc}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold tracking-tight">مختارات</h2>
          <Link
            to="/catalog"
            className="text-sm text-zinc-600 hover:text-zinc-900"
          >
            تصفّح المتجر
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              مصممة للحركة. مناسبة لكل يوم.
            </h2>
            <p className="mt-3 text-zinc-600">
              ملابس تجمع الأداء بالشكل — خامات قابلة للتنفس وخياطة متينة وقصّات
              عصرية من Golden Wear.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-700 text-sm list-disc list-inside">
              <li>صناعة مصرية بجودة عالية</li>
              <li>تغليف صديق للبيئة</li>
              <li>إرجاع مجاني خلال 7 أيام</li>
            </ul>
          </div>
          <img
            src={aboutImg}
            alt="عن Golden Wear"
            className="rounded-3xl border border-zinc-200"
          />
        </div>
      </section>
    </>
  );
}
