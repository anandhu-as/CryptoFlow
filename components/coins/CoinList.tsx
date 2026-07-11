"use client";
import { useCoins } from "@/hooks/useCoin";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Loader } from "../common/coinCardSkelton";

import { useWatchList } from "@/hooks/useWatchList";
import CoinCard from "./CoinCard";
export const CoinList = () => {

  const { coins, status, error } = useCoins();
  const { handleWatchList, watchlist } = useWatchList();

  if (status === "loading") return <Loader />;
  if (status === "error") return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div className="flex flex-col gap-6 p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {coins?.map((coin) => {
          const isWatchlisted = watchlist.some((item) => item.coinId === coin.id);
          return (
            <CoinCard 
              key={coin.id}
              coin={coin}
              isWatchlisted={isWatchlisted}
              handleWatchList={handleWatchList}
            />
          )
        })}
      </div>


      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          disabled
          className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          <button className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-colors bg-blue-600 text-white shadow-sm">
            1
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-colors bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            2
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-colors bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            3
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-colors bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            4
          </button>
        </div>

        <button
          className="p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}