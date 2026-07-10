import { addToWatchlist, getWatchlist } from "@/actions/watchlist";
import { CoinMarket } from "@/types/types";
import React from "react";

export const useWatchList = () => {
  const handleWatchList = async (event: React.MouseEvent, coin: CoinMarket) => {
    event.stopPropagation();
    await addToWatchlist({
      coinId: coin.id,
      coinName: coin.name,
      coinImage: coin.image,
      symbol: coin.symbol,
    });
    await getWatchlist();
  };
  return { handleWatchList ,getWatchlist};
};
