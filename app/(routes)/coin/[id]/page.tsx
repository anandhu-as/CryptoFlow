import CoinChart from "@/components/coins/coinChart";
import CoinDetail from "@/components/coins/CoinDetail";
import { fetchCoinById, fetchCoinChart } from "@/lib/api/coin";
const CoinPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const coin = await fetchCoinById(id);
  const chartData = await fetchCoinChart(id);

  

  return !coin ? (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="text-zinc-500 dark:text-zinc-400 font-medium">
        Coin not found
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <CoinDetail {...coin} />
        <CoinChart chartData={chartData} />
      </div>
    </div>
  );
};

export default CoinPage;
