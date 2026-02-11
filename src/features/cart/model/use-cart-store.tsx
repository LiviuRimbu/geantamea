"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductItem } from "@/shared/types/";

const encodedStorage = {
  getItem: (name: string): string | null => {
    if (typeof window === "undefined") return null;
    try {
      const stored = localStorage.getItem(name);
      if (!stored) return null;

      const binary = atob(stored);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      const decoder = new TextDecoder();
      return decoder.decode(bytes);
    } catch (err) {
      console.error("Decoding failed:", err);
      return null;
    }
  },

  setItem: (name: string, value: string): void => {
    if (typeof window === "undefined") return;
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(value);
      const base64 = btoa(String.fromCharCode(...data));
      localStorage.setItem(name, base64);
    } catch (err) {
      console.error("Encoding failed:", err);
    }
  },

  removeItem: (name: string): void => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(name);
  },
};

interface CartState {
  items: ProductItem[];
  isOpen: boolean;

  addItem: (item: ProductItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;

  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) =>
        set((state) => {
          const exists = state.items.some((i) => i.id === item.id);
          if (exists) return { isOpen: true };
          return { items: [...state.items, item], isOpen: true };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),

      clearCart: () => set({ items: [] }),

      getTotalPrice: () =>
        get().items.reduce((total, item) => total + Number(item.price), 0),

      getItemCount: () => get().items.length,

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: "crtstrg",
      storage: createJSONStorage(() => encodedStorage),
      partialize: (state) => ({ items: state.items }),
      skipHydration: true, // ADD THIS - prevents hydration mismatch
    },
  ),
);
