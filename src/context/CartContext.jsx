// FILE: src/context/CartContext.jsx
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "gw_cart_v1";

function cartReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload || { items: [] };
    case "ADD_ITEM": {
      const { id, name, price, img, size = null, qty = 1 } = action.payload;
      const items = [...state.items];
      const idx = items.findIndex((it) => it.id === id && it.size === size);
      if (idx >= 0) {
        items[idx] = { ...items[idx], qty: items[idx].qty + qty };
      } else {
        items.push({ id, name, price, img, size, qty });
      }
      return { ...state, items };
    }
    case "REMOVE_ITEM": {
      const { id, size = null } = action.payload;
      return { ...state, items: state.items.filter((it) => !(it.id === id && it.size === size)) };
    }
    case "UPDATE_QTY": {
      const { id, size = null, qty } = action.payload;
      const items = state.items.map((it) =>
        it.id === id && it.size === size ? { ...it, qty: Math.max(1, qty) } : it
      );
      return { ...state, items };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) dispatch({ type: "INIT", payload: saved });
    // eslint-disable-next-line no-empty
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const subtotal = useMemo(
    () => state.items.reduce((sum, it) => sum + Number(it.price) * Number(it.qty), 0),
    [state.items]
  );
  const count = useMemo(
    () => state.items.reduce((sum, it) => sum + Number(it.qty), 0),
    [state.items]
  );

  const api = useMemo(
    () => ({
      items: state.items,
      count,
      subtotal,
      addItem: (payload) => dispatch({ type: "ADD_ITEM", payload }),
      removeItem: (id, size = null) => dispatch({ type: "REMOVE_ITEM", payload: { id, size } }),
      updateQty: (id, size, qty) => dispatch({ type: "UPDATE_QTY", payload: { id, size, qty } }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [state.items, count, subtotal]
  );

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
