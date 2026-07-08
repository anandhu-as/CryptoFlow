import { useCoinStore } from "@/stores/useCoinStore";
import { useEffect } from "react";
//to hide the fetch trigger ...
export const useCoins = () => {
  const { coins, status, error, fetchCoins } = useCoinStore();
  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);
  return { coins, status, error };
};
