"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/lib/data";
import { toast } from "sonner";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface UserAccount {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  isLoggedIn: boolean;
}

export interface PlacedOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  paymentMethod: "cod" | "upi" | "card" | "netbanking";
  paymentStatus: "Pending on Delivery" | "Paid Online";
  shippingAddress: {
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
  trackingStatus: "Confirmed" | "Artisan Loom Inspection" | "Dispatched" | "In Transit" | "Delivered";
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  lastAddedItem: { name: string; price: number } | null;
  setLastAddedItem: (item: { name: string; price: number } | null) => void;
  user: UserAccount;
  loginUser: (email: string, name?: string) => void;
  logoutUser: () => void;
  orders: PlacedOrder[];
  placeOrder: (order: PlacedOrder) => void;
  latestOrder: PlacedOrder | null;
  isHydrated: boolean;
  couponCode: string | null;
  discount: number;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const DEMO_USER: UserAccount = {
  name: "Ananya Sharma",
  email: "demo@reshamcraft.com",
  phone: "+91 98450 12345",
  address: "Penthouse 4B, Silver Oak Heights, MG Road",
  city: "Bangalore",
  pincode: "560001",
  isLoggedIn: false
};

const INITIAL_ORDERS: PlacedOrder[] = [
  {
    orderId: "RC-8291",
    date: "12 Jan 2026",
    items: [{ product: PRODUCTS[3], quantity: 1 }],
    subtotal: 6800,
    discount: 0,
    shipping: 0,
    total: 6800,
    paymentMethod: "upi",
    paymentStatus: "Paid Online",
    shippingAddress: {
      fullName: "Ananya Sharma",
      phone: "+91 98450 12345",
      street: "Penthouse 4B, Silver Oak Heights, MG Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001"
    },
    trackingStatus: "Delivered"
  },
  {
    orderId: "RC-7102",
    date: "05 Dec 2025",
    items: [{ product: PRODUCTS[1], quantity: 1 }],
    subtotal: 6200,
    discount: 0,
    shipping: 0,
    total: 6200,
    paymentMethod: "card",
    paymentStatus: "Paid Online",
    shippingAddress: {
      fullName: "Ananya Sharma",
      phone: "+91 98450 12345",
      street: "Penthouse 4B, Silver Oak Heights, MG Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001"
    },
    trackingStatus: "Delivered"
  }
];

const COUPONS: Record<string, number> = { ROYAL10: 0.1 };

const DEFAULT_CART: CartItem[] = [
  { product: PRODUCTS[0], quantity: 1 },
  { product: PRODUCTS[1], quantity: 1 }
];

function readSaved<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error(e);
  }
  return fallback;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Start from the same values on the server and in the browser. Saved data is
  // loaded after the first render so the two never disagree during hydration.
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [couponCode, setCouponCode] = useState<string | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<{ name: string; price: number } | null>(null);
  const toastTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [user, setUser] = useState<UserAccount>(DEMO_USER);

  const [orders, setOrders] = useState<PlacedOrder[]>(INITIAL_ORDERS);

  const [latestOrder, setLatestOrder] = useState<PlacedOrder | null>(null);

  useEffect(() => {
    setCart(readSaved("reshamcraft_cart", DEFAULT_CART));
    setUser(readSaved("reshamcraft_user", DEMO_USER));
    setOrders(readSaved("reshamcraft_orders", INITIAL_ORDERS));
    setCouponCode(readSaved<string | null>("reshamcraft_coupon", null));
    setIsHydrated(true);
  }, []);

  // Persist changes, but never before saved data has been loaded.
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("reshamcraft_cart", JSON.stringify(cart));
      localStorage.setItem("reshamcraft_user", JSON.stringify(user));
      localStorage.setItem("reshamcraft_orders", JSON.stringify(orders));
      localStorage.setItem("reshamcraft_coupon", JSON.stringify(couponCode));
    } catch (e) {
      console.error(e);
    }
  }, [isHydrated, cart, user, orders, couponCode]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Set notification above subtotal in shopping bag drawer
    setLastAddedItem({ name: product.name, price: product.price });
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    // Auto-disappear after 2500ms
    toastTimeoutRef.current = setTimeout(() => {
      setLastAddedItem(null);
    }, 2500);

    setIsDrawerOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const item = prev.find((i) => i.product.id === productId);
      if (item) {
        toast.info(`Removed ${item.product.name} from bag`);
      }
      return prev.filter((i) => i.product.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const loginUser = (email: string, name = "Ananya Sharma") => {
    const updated: UserAccount = {
      ...DEMO_USER,
      email,
      name,
      isLoggedIn: true
    };
    setUser(updated);
  };

  const logoutUser = () => {
    setUser({ ...DEMO_USER, isLoggedIn: false });
    toast.info("Logged out successfully");
  };

  const placeOrder = (newOrder: PlacedOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
    setLatestOrder(newOrder);
    clearCart();
    setCouponCode(null);
  };

  const applyCoupon = (code: string) => {
    const normalized = code.trim().toUpperCase();
    if (!COUPONS[normalized]) return false;
    setCouponCode(normalized);
    return true;
  };

  const removeCoupon = () => setCouponCode(null);

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  // Worked out from the live subtotal so it stays right as the bag changes
  const discount = couponCode ? Math.round(subtotal * (COUPONS[couponCode] ?? 0)) : 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isDrawerOpen,
        setIsDrawerOpen,
        lastAddedItem,
        setLastAddedItem,
        user,
        loginUser,
        logoutUser,
        orders,
        placeOrder,
        latestOrder,
        isHydrated,
        couponCode,
        discount,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
