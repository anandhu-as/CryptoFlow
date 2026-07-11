"use client";
import { useCoins } from "@/hooks/useCoin";
import { Bookmark, ChevronLeft, ChevronRight } from "lucide-react";
import { Loader } from "../common/coinCardSkelton";
import { useRouter } from "next/navigation";

import { useWatchList } from "@/hooks/useWatchList";

export const CoinList = () => {
  const router = useRouter();
  const { coins, status, error } = useCoins();
  const { handleWatchList } = useWatchList();
  
  if (status === "loading") return <Loader />;
  if (status === "error") return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div className="flex flex-col gap-6 p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {coins?.map((coin) => (
          <div
            onClick={() => router.push(`/coin/${coin.id}`)}
            key={coin.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center gap-2 border border-zinc-200/80 dark:border-zinc-800 cursor-pointer relative group"
          >
            <img
              src={coin.image}
              alt={coin.name}
              className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-center mt-1">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white leading-tight">
                {coin.name}
              </h2>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-0.5">
                {coin.symbol}
              </p>
            </div>
            
            <div className="flex flex-col items-center w-full pt-2 mt-1 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                ${coin.current_price?.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 6,
                }) || "0.00"}
              </span>
              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-md mt-1 ${(coin.price_change_percentage_24h || 0) > 0
                  ? "bg-green-100/80 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                  : "bg-red-100/80 text-red-700 dark:bg-red-500/10 dark:text-red-400"
                  }`}
              >
                {(coin.price_change_percentage_24h || 0) > 0 ? "+" : ""}
                {(coin.price_change_percentage_24h || 0).toFixed(2)}%
              </span>
            </div>
            
            <button
              className="w-full mt-2 py-1.5 px-2 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-semibold rounded-xl transition-colors relative z-10 flex items-center justify-center gap-1.5"
              onClick={(event) => handleWatchList(event, coin)}
              title="Add to Watchlist"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Watchlist</span>
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls - UI only */}
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