"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
export const addToWatchlist = async (coin: {
  coinId: string;
  coinName: string;
  coinImage: string;
  symbol: string;
  addedPrice: number; // snapshot at add time
  currentPrice: number;
  priceChange: number;
}) => {
  const { userId } = await auth();
  if (!userId) throw new Error("user is not authenticated");
  await prisma.watchlist.upsert({
    where: {
      userId_coinId: {
        userId,
        coinId: coin.coinId,
      },
    },
    update: {},
    create: {
      userId,
      ...coin,
    },
  });
};
export const removeFromWatchList = async (coinId: string) => {
  const { userId } = await auth();
  if (!userId) throw new Error("user is not authenticated");
  await prisma.watchlist.deleteMany({
    where: {
      userId,
      coinId,
    },
  });
};

export const getWatchlist = async () => {
  const { userId } = await auth();
  if (!userId) return [];

  return prisma.watchlist.findMany({
    where: { userId },
    orderBy: { addedAt: "desc" },
  });
};
