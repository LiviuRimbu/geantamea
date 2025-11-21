"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem } from "@/shared/types/";
import CryptoJS from "crypto-js";

const NEXT_PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY!;

//LS encrypting
const secureStorage = {
  getItem: (name: string): string | null => {
    try {
      const encrypted = localStorage.getItem(name);
      if (!encrypted) return null;
      const bytes = CryptoJS.AES.decrypt(encrypted, NEXT_PUBLIC_KEY);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted; // persist middleware will parse this JSON string
    } catch (err) {
      console.error("Decryption failed:", err);
      return null;
    }
  },
  setItem: (name: string, value: string): void => {
    try {
      const jsonString =
        typeof value === "string" ? value : JSON.stringify(value);
      const encrypted = CryptoJS.AES.encrypt(
        jsonString,
        NEXT_PUBLIC_KEY,
      ).toString();
      localStorage.setItem(name, encrypted);
    } catch (err) {
      console.error("Encryption failed:", err);
    }
  },
  removeItem: (name: string): void => localStorage.removeItem(name),
};

//  Store
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
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
