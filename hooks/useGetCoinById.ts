import { COINGECKO } from "@/config/env";
//too get coin by id
export const fetchCoinById = async (id: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`,
    {
      headers: {
        "x-cg-demo-api-key": COINGECKO.APIKEY!,
      },
    },
  );

  const [coin] = await res.json();
  return coin;
};
