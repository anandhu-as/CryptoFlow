import { WatchlistCoin } from '@/types/types'
import React from 'react'
import { TrendingUp, TrendingDown } from "lucide-react"

const CoinDifference = ({ coin }: { coin: WatchlistCoin }) => {

    const coinDifference = coin.currentPrice - coin.addedPrice;
    const isPositive = coinDifference >= 0;
    const percentDifference = ((coinDifference / coin.addedPrice) * 100).toFixed(2);

    return (
        <div className={`flex items-center gap-1 text-xs font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>
                ₹ {Math.abs(coinDifference).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 6,
                })} ({isPositive ? '+' : ''}{percentDifference}%)
            </span>
        </div>
    )
}

export default CoinDifference