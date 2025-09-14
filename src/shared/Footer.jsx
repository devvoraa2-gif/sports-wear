// FILE: src/shared/Footer.jsx
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-zinc-900 grid place-items-center text-white font-bold">A</div>
            <span className="font-semibold tracking-tight">Golden Wear</span>
          </div>
          <p className="mt-4 text-zinc-600">ملابس رياضية عالية الجودة — من القاهرة إلى العالم.</p>
        </div>

        <div>
          <h4 className="font-semibold">تسوّق</h4>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li><a href="/catalog" className="hover:text-zinc-900">أحذية رياضية</a></li>
            <li><a href="/catalog" className="hover:text-zinc-900">رجالي</a></li>
            <li><a href="/catalog" className="hover:text-zinc-900">أطفال</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">مساعدة</h4>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>الشحن والإرجاع</li>
            <li>دليل المقاسات</li>
            <li>الدعم الفني</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">تابعنا</h4>
          <ul className="mt-3 space-y-2 text-zinc-600">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-zinc-500 pb-8">
        © {new Date().getFullYear()}  Golden Wear. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
