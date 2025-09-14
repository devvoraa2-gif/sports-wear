// FILE: src/pages/Contact.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return alert("كمّلي البيانات الأساسية.");
    setSent(true);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* معلومات التواصل */}
        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight">تواصل معنا</h1>
          <p className="text-zinc-600">لو عندك استفسار عن طلبات، مقاسات أو تعاونات — ابعتي لنا وهردّ عليك قريبًا.</p>

          <div className="rounded-3xl border border-zinc-200 bg-white p-5 space-y-4">
            <Row label="واتساب" value={<a className="text-zinc-900 hover:underline" href="https://wa.me/201000000000" target="_blank">+20 100 000 0000</a>} />
            <Row label="إنستجرام" value={<a className="text-zinc-900 hover:underline" href="https://instagram.com/goldenwear" target="_blank">@goldenwear</a>} />
            <Row label="الإيميل" value={<a className="text-zinc-900 hover:underline" href="mailto:support@goldenwear.eg">support@goldenwear.eg</a>} />
            <Row label="العنوان" value={<span className="text-zinc-900">القاهرة، مصر</span>} />
          </div>

          <div className="flex gap-3">
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              className="px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800"
            >
              تواصل واتساب
            </a>
            <Link
              to="/catalog"
              className="px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-100"
            >
              تصفّح المنتجات
            </Link>
          </div>

          <div className="rounded-3xl border border-zinc-200 overflow-hidden">
            <iframe
              title="Golden Wear Map"
              className="w-full h-56"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Cairo,%20Egypt&output=embed"
            />
          </div>
        </div>

        {/* نموذج مراسلة */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold mb-4">ارسلّي رسالة</h2>

          {sent ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
              تم إرسال رسالتك بنجاح. هنرجعلك قريبًا 👌
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <Input label="الاسم" name="name" value={form.name} onChange={onChange} required />
                <Input label="الموبايل" name="phone" value={form.phone} onChange={onChange} required />
              </div>
              <Input label="الإيميل (اختياري)" name="email" type="email" value={form.email} onChange={onChange} />
              <div>
                <label className="text-sm text-zinc-600">رسالتك</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  placeholder="اكتبي تفاصيل سؤالك…"
                  required
                />
              </div>
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800">
                إرسال
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-zinc-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-zinc-600">{label}</label>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
      />
    </div>
  );
}
