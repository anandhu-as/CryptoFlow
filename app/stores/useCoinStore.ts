import { create } from "zustand";

import { fetchCoinMarkets } from "@/lib/api/coins";
import { CoinMarketsResponse } from "@/types/types";



type CoinStore = {
  coins: CoinMarketsResponse;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
  fetchCoins: () => Promise<void>;
};

export const useCoinStore = create<CoinStore>((set) => ({

  coins: [],
  status: "idle",
  error: null,


  fetchCoins: async () => {
    set({ status: "loading", error: null });
    try {
      const data = await fetchCoinMarkets();
      set({ coins: data, status: "success" });
    } catch (err) {
      set({
        status: "error",
        error: err instanceof Error ? err.message : "Something went wrong",
      });
    }
  },
}));