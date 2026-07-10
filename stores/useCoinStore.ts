import { create } from "zustand";
import { CoinStore } from "@/types/types";
import { fetchCoinMarkets } from "@/lib/api/markets";
export const useCoinStore = create<CoinStore>((set) => ({
  coins: [],
  status: "idle",
  error: null,

  fetchCoins: async () => {
    set({ status: "loading", error: null });
    try {
      //fetcher () in lib/api/markets.ts
      const data = await fetchCoinMarkets();
      set({ coins: data, status: "success" });
    } catch (err) {
      set({
        status: "error",
        error: err instanceof Error ? err.message : "Something went wronggg",
      });
    }
  },
}));
