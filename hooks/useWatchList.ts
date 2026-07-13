import {
  addToWatchlist,
  getWatchlist as fetchWatchlist,
  removeFromWatchList,
} from "@/actions/watchlist";
import { CoinMarket } from "@/types/types";
import { Watchlist } from "@prisma/client";
import React, { useState, useEffect } from "react";

export const useWatchList = () => {
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);
  const [loading, setLoading] = useState(false);

  const getWatchlist = async () => {
    try {
      const data = await fetchWatchlist();
      setWatchlist(data);
    } catch (error) {
      console.error("Failed to fetch watchlist", error);
    }
  };

  useEffect(() => {
    getWatchlist();
  }, []);

  const handleWatchList = async (event: React.MouseEvent, coin: CoinMarket) => {
    event.stopPropagation();
    try {
      setLoading(true);
      const isWatchlisted = watchlist.some((item) => item.coinId === coin.id);

      if (isWatchlisted) {
        await removeFromWatchList(coin.id);
      } else {
        await addToWatchlist({
          coinId: coin.id,
          coinName: coin.name,
          coinImage: coin.image,
          symbol: coin.symbol,
          addedPrice: coin.current_price,
          currentPrice: coin.current_price,
          priceChange: coin.price_change_24h || 0,
        });
      }
      await getWatchlist();
    } catch (error) {
      console.error("Failed to update watchlist", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleWatchList,
    watchlist,
    loading,
    getWatchlist,
    removeFromWatchList,
  };
};
