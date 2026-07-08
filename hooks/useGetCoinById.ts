import { COINGECKO } from "@/config/env";
//too get coin by id
export const fetchCoinById = async (id: string) => {
  const res = await fetch(`${COINGECKO.COIN_DETAILS_URL}${id}`, {
    headers: {
      "x-cg-demo-api-key": COINGECKO.APIKEY!,
    },
  });
  const [coin] = await res.json();
  return coin;
};
