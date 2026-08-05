import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  variant?: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string, variant?: string) => void;
  setQuantity: (id: string, quantity: number, variant?: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "drip-nation-box:cart";

function lineKey(id: string, variant?: string) {
  return variant ? `${id}::${variant}` : id;
}

function readInitialItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readInitialItems);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      items,
      count,
      subtotal,
      addItem: (item, quantity = 1) => {
        setItems((current) => {
          const key = lineKey(item.id, item.variant);
          const existing = current.find((i) => lineKey(i.id, i.variant) === key);
          if (existing) {
            return current.map((i) =>
              lineKey(i.id, i.variant) === key
                ? { ...i, quantity: i.quantity + quantity }
                : i,
            );
          }
          return [...current, { ...item, quantity }];
        });
      },
      removeItem: (id, variant) => {
        setItems((current) => current.filter((i) => lineKey(i.id, i.variant) !== lineKey(id, variant)));
      },
      setQuantity: (id, quantity, variant) => {
        setItems((current) =>
          quantity <= 0
            ? current.filter((i) => lineKey(i.id, i.variant) !== lineKey(id, variant))
            : current.map((i) =>
                lineKey(i.id, i.variant) === lineKey(id, variant) ? { ...i, quantity } : i,
              ),
        );
      },
      clear: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export { CartProvider, useCart };
