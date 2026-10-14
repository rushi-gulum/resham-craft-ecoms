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
    subtotal: 32500,
    discount: 0,
    shipping: 0,
    total: 32500,
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
    subtotal: 18500,
    discount: 0,
    shipping: 0,
    total: 18500,
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

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("reshamcraft_cart");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      { product: PRODUCTS[0], quantity: 1 },
      { product: PRODUCTS[1], quantity: 1 }
    ];
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<{ name: string; price: number } | null>(null);
  const toastTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const [user, setUser] = useState<UserAccount>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("reshamcraft_user");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return DEMO_USER;
  });

  const [orders, setOrders] = useState<PlacedOrder[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("reshamcraft_orders");
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_ORDERS;
  });

  const [latestOrder, setLatestOrder] = useState<PlacedOrder | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("reshamcraft_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem("reshamcraft_user", JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem("reshamcraft_orders", JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

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
  };

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

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
        latestOrder
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
