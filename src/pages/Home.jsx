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
      <section className="relative overflow-hidden bg-white">
        <div className="px-4 lg:px-8 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="text-center lg:text-start max-w-xl">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full text-dark-700 text-sm font-medium mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-red-600"></span>
              <p className="mt-[-3px]">إصدار جديد: تشكيلة خريف 2025</p>
            </div>
            <h1 className="text-lg sm:text-xl lg:text-3xl font-bold tracking-tight leading-tight">
              <span className="text-red-600 me-2">قوة وأسلوب في كل حركة</span>
              <span>— Golden Wear</span>
            </h1>
            <p className="mt-4 leading-relaxed">
              جولدن وير بتديك القوة والستايل في كل حركة، البراند اللي يخلي
              رياضتك شكل وأداء. مع جولدن وير كل خطوة أجرأ وأخف.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <Link
                to="/catalog"
                className="px-5 py-3 lg:me-5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition"
              >
                تسوّق الآن
              </Link>
              <a
                href="#categories"
                className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100 transition"
              >
                تصفّح التصنيفات
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-medium">
              <div>استرجاع مجاني خلال 7 أيام</div>
              <div>الدفع عند الاستلام (مصر)</div>
              <div>دفع آمن</div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              className="rounded-3xl shadow-2xl w-full"
              src={heroImg}
              alt="Golden Wear Hero"
            />
            <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl px-4 py-3 text-sm border border-zinc-200 bg-zinc-900 flex flex-col items-start justify-start">
              <span className="font-semibold text-white">الأكثر مبيعًا</span>
              <span className="text-white">Velocity Runner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="categories"
        className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-14"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 gap-3">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/catalog?cat=${c.id}`}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold">{c.title}</h3>
                  <span className="text-sm text-zinc-700">{c.desc}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <h2 className="text-2xl font-bold tracking-tight">مختارات</h2>
          <Link
            to="/catalog"
            className="text-sm text-zinc-600 hover:text-zinc-900"
          >
            تصفّح المتجر
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* النص */}
          <div className="pt-6 lg:pt-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              مصممة للحركة مناسبة لكل يوم
            </h2>

            <p className="mt-4 text-zinc-900 font-bold leading-relaxed text-base sm:text-lg">
              ملابس تجمع الأداء بالشكل —{" "}
              <span className="text-red-700 font-medium">
                خامات قابلة للتنفس وخياطة متينة
              </span>
              <span className="block mt-1">وقصّات عصرية من Golden Wear.</span>
            </p>

            <ul className="mt-6 space-y-3 text-zinc-900 font-bold text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">●</span>
                <span>صناعة مصرية بجودة عالية</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">●</span>
                <span>تغليف صديق للبيئة</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">●</span>
                <span>إرجاع مجاني خلال 7 أيام</span>
              </li>
            </ul>
          </div>

          {/* الصورة */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="عن Golden Wear"
              className="rounded-3xl border border-zinc-300 shadow-lg w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
