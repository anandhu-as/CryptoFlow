"use client";
import { useCoins } from "@/hooks/useCoin";
import { Bookmark } from "lucide-react";
import { Loader } from "../common/coinCardSkelton";
import { useRouter } from "next/navigation";

import { useWatchList } from "@/hooks/useWatchList";
export const CoinList = () => {
  const router = useRouter();
  const { coins, status, error } = useCoins();
  const { handleWatchList } = useWatchList();
  if (status === "loading") return <Loader />;
  if (status === "error") return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {coins.map((coin) => (
          <div
            onClick={() => router.push(`/coin/${coin.id}`)}
            key={coin.id}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center gap-3 border border-zinc-200 dark:border-zinc-800 cursor-pointer relative group"
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-12 h-12 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="text-center">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">
                {coin.name}
              </h2>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-0.5">
                {coin.symbol}
              </p>
            </div>
            <div className="flex flex-col items-center mt-1 w-full pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                ${coin.current_price?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 6,
                }) || "0.00"}
              </span>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1.5 ${(coin.price_change_percentage_24h || 0) > 0
                  ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                  }`}
              >
                {(coin.price_change_percentage_24h || 0) > 0 ? "+" : ""}
                {(coin.price_change_percentage_24h || 0).toFixed(2)}%
              </span>
            </div>
            <button
              className="w-full mt-2 py-1.5 px-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold rounded-lg transition-colors relative z-10 flex items-center justify-center gap-1.5"
              onClick={(event) => handleWatchList(event, coin)}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Add to Watchlist</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}