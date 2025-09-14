// FILE: src/components/checkout/VodafoneCashBox.jsx
export default function VodafoneCashBox({
  payTo = "0100 000 0000",
  amount = 60,
  senderPhone,
  txnId,
  receipt,
  onChange,
}) {
  const set = (patch) => onChange((prev) => ({ ...prev, ...patch }));

  const onPickFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => set({ receipt: ev.target.result });
    reader.readAsDataURL(file);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 p-4">
      <div className="text-sm text-zinc-700">حوّلي قيمة الشحن على <strong>Vodafone Cash</strong>:</div>

      <div className="mt-3 grid sm:grid-cols-3 gap-3">
        <Box label="رقم المحفظة" value={payTo} copyable />
        <Box label="قيمة التحويل" value={`${fmt(amount)} جنيه`} />
        <Box label="الغرض" value="تأكيد الطلب" />
      </div>

      <div className="mt-4 grid sm:grid-cols-3 gap-3">
        <Field label="رقم المرسل (محفظتك)" placeholder="01xxxxxxxxx" value={senderPhone} onChange={(e) => set({ senderPhone: e.target.value })} required />
        <Field label="رقم العملية (Transaction ID)" placeholder="مثال: 123456789" value={txnId} onChange={(e) => set({ txnId: e.target.value })} required />
        <div>
          <label className="text-sm text-zinc-600">صورة إيصال (اختياري)</label>
          <input type="file" accept="image/*" onChange={onPickFile} className="mt-1 block w-full text-sm file:mr-3 file:px-3 file:py-2 file:rounded-xl file:border-0 file:bg-zinc-900 file:text-white hover:file:bg-zinc-800" />
        </div>
      </div>

      {receipt ? (
        <div className="mt-3">
          <img src={receipt} alt="Receipt" className="h-28 rounded-xl border border-zinc-200" />
        </div>
      ) : null}

      <p className="mt-3 text-xs text-zinc-500">
        بعد إدخال بيانات التحويل هنراجع العملية ونتواصل لتأكيد الطلب. المبلغ المتبقي هتدفعه للمندوب عند الاستلام.
      </p>
    </div>
  );
}

function Box({ label, value, copyable }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      alert("تم النسخ ✅");
    } catch {}
  };
  return (
    <div className="rounded-xl border border-zinc-200 px-3 py-2 bg-zinc-50 flex items-center justify-between">
      <div>
        <div className="text-[11px] text-zinc-500">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
      {copyable ? (
        <button onClick={copy} className="text-xs px-2 py-1 rounded-lg border border-zinc-300 hover:bg-zinc-100">نسخ</button>
      ) : null}
    </div>
  );
}
function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-sm text-zinc-600">{label}</label>
      <input {...props} className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300" />
    </div>
  );
}
function fmt(n) {
  return new Intl.NumberFormat("ar-EG").format(Math.max(0, Math.round(n)));
}
