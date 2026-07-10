import { getWatchlist } from "@/actions/watchlist";
const Page = async () => {
  const list = await getWatchlist();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Watchlist 🛒</h1>
      {list.length === 0 ? (
        <p>No coins in your watchlist.</p>
      ) : (
        <div className="space-y-4">
          {list.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center gap-4 border rounded-lg p-4"
            >
              <img
                src={coin.coinImage}
                alt={coin.coinName}
                className="w-10 h-10"
              />
              <div>
                <h2 className="font-semibold">{coin.coinName}</h2>
                <p className="text-gray-500 uppercase">{coin.symbol}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Page