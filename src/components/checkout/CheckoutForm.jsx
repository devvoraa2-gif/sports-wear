// FILE: src/components/checkout/CheckoutForm.jsx
export default function CheckoutForm({ form, setForm }) {
  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  function Field({ label, className = "", children, ...props }) {
    return (
      <div className={className}>
        <label className="text-sm text-zinc-600">{label}</label>
        {children ? (
          children
        ) : (
          <input
            {...props}
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
          />
        )}
      </div>
    );
  }

  const shippingRates = [
    { city: "القاهرة", price: 60 },
    { city: "الجيزة", price: 60 },
    { city: "الإسكندرية", price: 60 },
    { city: "البحيرة", price: 60 },
    { city: "القليوبية", price: 60 },
    { city: "الشرقية", price: 60 },
    { city: "الغربية", price: 60 },
    { city: "الدقهلية", price: 70 },
    { city: "دمياط", price: 70 },
    { city: "كفر الشيخ", price: 70 },
    { city: "أسوان", price: 90 },
    { city: "أسيوط", price: 90 },
    { city: "المنيا", price: 90 },
    { city: "بني سويف", price: 90 },
    { city: "الفيوم", price: 90 },
    { city: "سوهاج", price: 90 },
    { city: "البحر الأحمر", price: 190 },
    { city: "مطروح", price: 170 },
    { city: "السويس", price: 80 },
    { city: "الإسماعيلية", price: 80 },
    { city: "بورسعيد", price: 80 },
    { city: "المنوفية", price: 60 },
    { city: "قنا", price: 90 },
    { city: "الأقصر", price: 90 },
  ];

  // نجيب سعر المدينة المختارة
  const selectedCity = shippingRates.find((c) => c.city === form.city);

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-semibold mb-4">بيانات الاستلام</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="الاسم" name="name" value={form.name} onChange={onChange} required />
        <Field label="الموبايل" name="phone" value={form.phone} onChange={onChange} required />

        {/* اختيار المدينة */}
        <Field label="المدينة" className="">
          <select
            name="city"
            value={form.city}
            onChange={onChange}
            required
            className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
          >
            <option value="">اختر المدينة</option>
            {shippingRates.map(({ city }) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </Field>

        {/* عرض سعر الشحن عند اختيار المدينة */}
        {selectedCity && (
          <div className="sm:col-span-2 text-sm text-zinc-700 bg-zinc-100 rounded-xl px-3 py-2 w-[200px]">
            تكلفة الشحن: <span className="font-semibold">{selectedCity.price} جنيه</span>
          </div>
        )}

        <Field
          label="العنوان بالتفصيل"
          name="address"
          value={form.address}
          onChange={onChange}
          required
          className="sm:col-span-2"
        />
        <Field
          label="ملاحظات (اختياري)"
          name="notes"
          value={form.notes}
          onChange={onChange}
          className="sm:col-span-2"
        />
      </div>
    </div>
  );
}
