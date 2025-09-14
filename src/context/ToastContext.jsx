/* eslint-disable react-refresh/only-export-components */
// FILE: src/context/ToastContext.jsx
import { createContext, useContext, useMemo, useRef, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(1);

  const remove = (id) => setToasts((t) => t.filter((x) => x.id !== id));

  const api = useMemo(() => {
    const push = (type, message, ms = 2500) => {
      const id = idRef.current++;
      setToasts((t) => [...t, { id, type, message }]);
      setTimeout(() => remove(id), ms);
    };
    return {
      success: (m, ms) => push("success", m, ms),
      error: (m, ms) => push("error", m, ms),
      info: (m, ms) => push("info", m, ms),
      remove,
    };
  }, []);

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="fixed top-6 left-6 z-[100] space-y-2 rtl:left-auto rtl:right-6">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`flex items-start gap-3 rounded-2xl border p-3 shadow-sm bg-white ${
              t.type === "success"
                ? "border-emerald-200"
                : t.type === "error"
                ? "border-red-200"
                : "border-zinc-200"
            }`}
          >
            <span
              className={`mt-0.5 inline-block h-2.5 w-2.5 rounded-full ${
                t.type === "success"
                  ? "bg-emerald-500"
                  : t.type === "error"
                  ? "bg-red-500"
                  : "bg-zinc-400"
              }`}
            />
            <div className="text-sm text-zinc-800">{t.message}</div>
            <button
              onClick={() => api.remove(t.id)}
              className="ms-2 text-xs text-zinc-500 hover:text-zinc-700"
            >
              إغلاق
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}


export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
