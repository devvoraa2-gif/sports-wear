// FILE: src/components/checkout/CheckoutForm.jsx
export default function CheckoutForm({ form, setForm }) {
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-semibold mb-4">بيانات الاستلام</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="الاسم" name="name" value={form.name} onChange={onChange} required />
        <Field label="الموبايل" name="phone" value={form.phone} onChange={onChange} required />
        <Field label="المدينة" name="city" value={form.city} onChange={onChange} required />
        <Field label="العنوان بالتفصيل" name="address" value={form.address} onChange={onChange} required className="sm:col-span-2" />
        <Field label="ملاحظات (اختياري)" name="notes" value={form.notes} onChange={onChange} className="sm:col-span-2" />
      </div>
    </div>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="text-sm text-zinc-600">{label}</label>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
      />
    </div>
  );
}
