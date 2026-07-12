"use client";
import { useCoins } from "@/hooks/useCoin";
import { Loader } from "../common/coinCardSkelton";
import { useWatchList } from "@/hooks/useWatchList";
import CoinCard from "./CoinCard";
export const CoinList = () => {
  const { coins, status, error } = useCoins();
  const { handleWatchList, watchlist } = useWatchList();
  if (status === "loading") return <Loader />;
  if (status === "error")
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  return (
    <div className="flex flex-col gap-6 p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {coins?.map((coin) => {
          const isWatchlisted = watchlist.some(
            (item) => item.coinId === coin.id,
          );
          return (
            <CoinCard
              key={coin.id}
              coin={coin}
              isWatchlisted={isWatchlisted}
              handleWatchList={handleWatchList}
            />
          );
        })}
      </div>
    </div>
  );
};
