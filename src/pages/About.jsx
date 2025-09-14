// FILE: src/pages/About.jsx
import { Link } from "react-router-dom";

// عدّلي أسماء الصور حسب اللي عندك في assets (لو مش موجودة سيبيها واحذفي الـimg بلوك)
import aboutHero from "../assets/img8.jpeg";
import workshop  from "../assets/img9.jpeg";
import teamImg   from "../assets/img10.jpeg";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-12">
      {/* Hero */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">عن Golden Wear</h1>
          <p className="mt-3 text-zinc-600 leading-7">
            بدأنا Golden Wear برؤية بسيطة: نوصل لِبس رياضي مريح، عملي، وأنيق — ومتوفّر بسعر عادل.
            من القاهرة إلى كل مدينة عربية، نشتغل على خامات مختارة وقصّات عملية تناسب التمرين واليوم العادي.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/catalog" className="px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">
              تسوّق الآن
            </Link>
            <a href="#values" className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100">
              قيمنا
            </a>
          </div>
        </div>

        {aboutHero && (
          <img
            src={aboutHero}
            alt="Golden Wear - ورشة العمل"
            className="rounded-3xl border border-zinc-200 w-full"
          />
        )}
      </div>

      {/* رسالتنا وقصتنا */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-zinc-200 p-6 bg-white">
          <h2 className="text-xl font-semibold">رسالتنا</h2>
          <p className="mt-2 text-zinc-600 text-sm leading-6">
            نصمم ملابس رياضية تشجّعك تتحرّك كل يوم—بخامات مريحة وتفاصيل ذكية تخليك تركز على هدفك.
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-200 p-6 bg-white">
          <h2 className="text-xl font-semibold">قصتنا</h2>
          <p className="mt-2 text-zinc-600 text-sm leading-6">
            بدأنا كمشروع صغير سنة 2023، ومع دعم العملاء كبرنا خط الإنتاج وأضافينا أحذية وإكسسوارات.
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-200 p-6 bg-white">
          <h2 className="text-xl font-semibold">الجودة أولًا</h2>
          <p className="mt-2 text-zinc-600 text-sm leading-6">
            نجرّب كل منتج داخليًا قبل ما ينزل—اختبارات غسيل، مرونة، وثبات لون—عشان يوصل لك بأعلى معيار.
          </p>
        </div>
      </div>

      {/* الخامات والاستدامة */}
      <div id="values" className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">خامات مُختارة + تصنيع مسئول</h2>
          <ul className="list-disc list-inside text-zinc-700 text-sm space-y-2">
            <li>أقمشة قابلة للتنفس ومناسبة للمجهود العالي.</li>
            <li>خيوط متينة مع غرز مُعزّزة عند مناطق الضغط.</li>
            <li>تغليف صديق للبيئة وتقليل البلاستيك أحادي الاستخدام.</li>
          </ul>
        </div>

        {workshop && (
          <img
            src={workshop}
            alt="خامات وتصنيع"
            className="rounded-3xl border border-zinc-200 w-full"
          />
        )}
      </div>

      {/* Timeline بسيط */}
      <div className="rounded-3xl border border-zinc-200 p-6 bg-white">
        <h2 className="text-xl font-semibold">محطات سريعة</h2>
        <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="font-semibold">2023</div>
            <div className="text-zinc-600 mt-1">إطلاق أول تشكيلة تيشيرتات</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="font-semibold">2024</div>
            <div className="text-zinc-600 mt-1">إضافة خط الأحذية الرياضية</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-4">
            <div className="font-semibold">2025</div>
            <div className="text-zinc-600 mt-1">متجر أونلاين وشراكات توصيل محلية</div>
          </div>
        </div>
      </div>

      {/* الفريق/التواصل */}
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">فريقنا</h2>
          <p className="mt-3 text-zinc-600">
            فريق صغير بحب للتفاصيل—من التصميم للتصنيع والتغليف وخدمة العملاء.
            لو عندك أي اقتراحات أو مقاسات خاصة، كلمنا وهنساعدك.
          </p>
          <div className="mt-5 flex gap-3">
            <Link to="/catalog" className="px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">
              تصفّح المنتجات
            </Link>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100">
              تواصل معنا
            </a>
          </div>
        </div>

        {teamImg && (
          <img
            src={teamImg}
            alt="فريق Golden Wear"
            className="rounded-3xl border border-zinc-200 w-full"
          />
        )}
      </div>

      {/* معلومات تواصل مختصرة */}
      <div id="contact" className="rounded-3xl border border-zinc-200 p-6 bg-white">
        <h2 className="text-xl font-semibold">تواصل</h2>
        <div className="mt-3 text-sm text-zinc-700 space-y-1">
          <div>واتساب: 0100-000-0000</div>
          <div>إنستجرام: @goldenwear</div>
          <div>الإيميل: support@goldenwear.eg</div>
        </div>
      </div>
    </section>
  );
}
