
"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type ChartPoint = { date: number; price: number };

export function CoinChart({ chartData }: { chartData: ChartPoint[] }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">Price Trend</h2>
        <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-full border border-indigo-100 dark:border-indigo-500/20">
          Last 7 Days
        </span>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} opacity={0.2} />
          <XAxis 
            dataKey="date" 
            type="number"
            domain={['dataMin', 'dataMax']}
            tick={{ fontSize: 12, fill: '#71717a' }} 
            stroke="#27272a" 
            tickLine={false}
            axisLine={false}
            dy={10}
            minTickGap={50}
            tickFormatter={(val) => new Date(val).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          />
          <YAxis
            tick={{ fontSize: 12, fill: '#71717a' }}
            stroke="#27272a"
            tickFormatter={(v) => `$${v.toLocaleString()}`}
            width={80}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            formatter={(value: any) => [`$${Number(value).toLocaleString()}`, "Price"]}
            labelFormatter={(label: any) => new Date(label).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
            contentStyle={{
              backgroundColor: "rgba(24, 24, 27, 0.8)",
              border: "1px solid rgba(63, 63, 70, 0.5)",
              borderRadius: "12px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(8px)"
            }}
            labelStyle={{ color: "#a1a1aa", marginBottom: "4px", fontWeight: 500 }}
            itemStyle={{ color: "#fff", fontWeight: 600, padding: 0 }}
            cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '4 4' }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#6366f1"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorPrice)"
            activeDot={{ r: 6, fill: "#6366f1", stroke: "#18181b", strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}