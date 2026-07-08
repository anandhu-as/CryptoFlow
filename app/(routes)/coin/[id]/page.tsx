import CoinDetail from "@/components/coins/CoinDetail";
import { fetchCoinById } from "@/hooks/useGetCoinById";
const CoinPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const coin = await fetchCoinById(id);
    return !coin ? (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950">
            <div className="text-zinc-500 dark:text-zinc-400 font-medium">
                Coin not found
            </div>
        </div>
    ) : (
        <CoinDetail {...coin} />
    );
};

export default CoinPage;