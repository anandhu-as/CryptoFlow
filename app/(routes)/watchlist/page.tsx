import { getWatchlist } from "@/actions/watchlist";
import Link from "next/link";
import { ChevronRight, Bookmark, ChevronLeft } from "lucide-react";
import Image from "next/image";
import RemoveWatchlistButton from "@/components/RemoveWatchlistButton";

const Page = async () => {
  const list = await getWatchlist();
  return (
    <div className="max-w-5xl mx-auto p-6 lg:p-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          My Watchlist
        </h1>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>
      {list.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-gray-50/50 border border-dashed border-gray-200 rounded-3xl">
          <Bookmark className="w-12 h-12 text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">
            Your watchlist is empty
          </h3>
          <p className="text-gray-500 mt-2 max-w-sm">
            Keep track of your favorite cryptocurrencies. Add some coins to get
            started.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {list.map((coin) => (
            <div
              key={coin.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white border border-gray-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={coin.coinImage}
                    alt={coin.coinName}
                    fill
                    sizes="48px"
                    className="rounded-full ring-2 ring-gray-50 object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">
                    {coin.coinName}
                  </h2>
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {coin.symbol}
                      </span>
                      <span className="text-sm font-bold text-gray-700 ml-2">
                        ₹{" "}
                        {coin.currentPrice?.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 6,
                        }) || "0.00"}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-500">
                      Added Price: ₹{" "}
                      {coin.addedPrice?.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 6,
                      }) || "0.00"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  href={`/coin/${coin.coinId}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-700 bg-blue-50/80 hover:bg-blue-100 rounded-xl transition-colors"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <RemoveWatchlistButton coinId={coin.coinId} />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 text-center text-sm text-gray-500">
        Total coins in watchlist:{" "}
        <span className="font-semibold ">{list.length}</span>
      </div>
    </div>
  );
};

export default Page;
