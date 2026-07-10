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

///date and price
export const fetchCoinChart = async (id: string) => {
  const res = await fetch(
    `${COINGECKO.CHART_URL}${id}/market_chart?vs_currency=usd&days=7`,
    {
      headers: {
        "x-cg-demo-api-key": COINGECKO.APIKEY!,
      },
    },
  );
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.prices) return [];
  return data.prices.map((p: [number, number]) => ({
    date: p[0],
    price: p[1],
  }));
};
