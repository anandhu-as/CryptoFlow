"use client";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  ChevronUp,
  ChevronDown,
  Bookmark,
} from "lucide-react";
import Image from "next/image";
import { CoinMarket } from "@/types/types";
import { Button } from "../ui/button";
import { useWatchList } from "@/hooks/useWatchList";
const CoinDetail = (coin: CoinMarket) => {
  const { handleWatchList, watchlist } = useWatchList();
  const isPositive = coin.price_change_percentage_24h > 0;
  const isWatchlisted = watchlist.some((item) => item.coinId === coin.id);
  return (
    <>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Markets
      </Link>

      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 md:p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
          <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
            <Image
              src={coin.image}
              alt={coin.name}
              fill
              sizes="(max-width: 768px) 64px, 80px"
              className="object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {coin.name}
              </h1>
              <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider rounded-lg">
                {coin.symbol}
              </span>
            </div>
            <div className="text-zinc-500 dark:text-zinc-400 mt-1 font-medium flex items-center gap-2">
              Rank #{coin.market_cap_rank || "N/A"}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end relative z-10">
          <div className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1">
            Current Price
          </div>
          <div className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tighter">
            $
            {coin.current_price?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6,
            })}
          </div>
          <div
            className={`flex items-center gap-1.5 mt-2 font-semibold text-sm px-3 py-1 rounded-full ${
              isPositive
                ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span>
              {isPositive ? "+" : ""}
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
          <Button
            onClick={(event) => handleWatchList(event, coin)}
            className={`mt-6 rounded-full font-semibold gap-2 px-6 shadow-md hover:shadow-lg transition-all w-full md:w-auto ${
              isWatchlisted
                ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/40 dark:hover:bg-blue-900/60 dark:text-blue-400"
                : "bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-900"
            }`}
          >
            <Bookmark
              className={`w-4 h-4 ${isWatchlisted ? "fill-current" : ""}`}
            />{" "}
            {isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Market Cap
            </h3>
            <div className="p-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-110 transition-transform">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            ${coin.market_cap?.toLocaleString("en-US")}
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              24h Volume
            </h3>
            <div className="p-2 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg group-hover:scale-110 transition-transform">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            ${coin.total_volume?.toLocaleString("en-US")}
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              24h High
            </h3>
            <div className="p-2 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg group-hover:scale-110 transition-transform">
              <ChevronUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            $
            {coin.high_24h?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6,
            })}
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              24h Low
            </h3>
            <div className="p-2 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg group-hover:scale-110 transition-transform">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            $
            {coin.low_24h?.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 6,
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default CoinDetail;
