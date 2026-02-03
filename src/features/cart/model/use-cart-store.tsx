"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem } from "@/shared/types/";

const encodedStorage = {
  getItem: (name: string): string | null => {
    try {
      const encoded = localStorage.getItem(name);
      if (!encoded) return null;
      return atob(encoded);
    } catch (err) {
      console.error("Decoding failed:", err);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      const encoded = btoa(value);
      localStorage.setItem(name, encoded);
    } catch (err) {
      console.error("Encoding failed:", err);
    }
  },
  removeItem: (name: string): void => localStorage.removeItem(name),
};

// Store
interface CartState {
  items: CartItem[];
  isOpen: boolean;

  addItem: (item: CartItem) => void;
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
    },
  ),
);
