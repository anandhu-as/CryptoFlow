import { Bookmark } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CoinCardProps } from "@/types/types";

const CoinCard = ({ coin, isWatchlisted, handleWatchList }: CoinCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/coin/${coin.id}`)}
      className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center gap-2 border border-zinc-200/80 dark:border-zinc-800 cursor-pointer relative group"
    >
      <div className="relative w-10 h-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
        <Image
          src={coin.image}
          alt={coin.name}
          fill
          sizes="40px"
          className="object-contain"
        />
      </div>
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
          $
          {coin.current_price?.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6,
          }) || "0.00"}
        </span>
        <span
          className={`text-[11px] font-bold px-2 py-0.5 rounded-md mt-1 ${
            (coin.price_change_percentage_24h || 0) > 0
              ? "bg-green-100/80 text-green-700 dark:bg-green-500/10 dark:text-green-400"
              : "bg-red-100/80 text-red-700 dark:bg-red-500/10 dark:text-red-400"
          }`}
        >
          {(coin.price_change_percentage_24h || 0) > 0 ? "+" : ""}
          {(coin.price_change_percentage_24h || 0).toFixed(2)}%
        </span>
      </div>

      <button
        className={`w-full mt-2 py-1.5 px-2 text-xs font-semibold rounded-xl transition-colors relative z-10 flex items-center justify-center gap-1.5 ${
          isWatchlisted
            ? "bg-blue-100/80 text-grey-400 dark:bg-blue-500/20 dark:text-blue-400 hover:bg-blue-200/80 dark:hover:bg-blue-500/30"
            : "bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300"
        }`}
        onClick={(event) => handleWatchList(event, coin)}
        title={isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
      >
        <Bookmark
          className={`w-3.5 h-3.5 ${isWatchlisted ? "fill-current" : ""}`}
        />
        <span>{isWatchlisted ? "Watchlisted" : "Watchlist"}</span>
      </button>
    </div>
  );
};

export default CoinCard;
