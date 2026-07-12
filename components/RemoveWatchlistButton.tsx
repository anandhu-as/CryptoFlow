"use client";

import { Trash2 } from "lucide-react";
import { removeFromWatchList } from "@/actions/watchlist";
import { useRouter } from "next/navigation";

const RemoveWatchlistButton = ({ coinId }: { coinId: string }) => {
  const router = useRouter();

  const handleRemove = async () => {
    try {
      await removeFromWatchList(coinId);
      router.refresh();
    } catch (error) {
      console.error("Failed to remove from watchlist", error);
    }
  };

  return (
    <button
      onClick={handleRemove}
      type="button"
      className="flex items-center justify-center w-11 h-11 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
      title="Remove from watchlist"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  );
}
export default RemoveWatchlistButton