import { COINGECKO } from "@/config/env";
import { CoinMarketsResponse } from "@/types/types";

export async function fetchCoinMarkets(): Promise<CoinMarketsResponse> {
  const res = await fetch(COINGECKO.BASE_URL!, {
    headers: {
      "x-cg-demo-api-key": COINGECKO.APIKEY!,
    },
    next: { revalidate: 60 },
  });
  //for 1 sec loading time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  return res.json();
}
