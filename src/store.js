import { create } from "zustand";

export const useStore = create((set) => ({
  authState: { isAuthenticated: false, userRole: null },
  setAuthState: (newState) => set({ authState: newState }),

  currentPage: "dashboard",
  setCurrentPage: (page) => set({ currentPage: page }),
}));
