"use client";

import { useState, useEffect } from "react";
import { ChartPoint } from "@/types/types";
import * as Charts from "../../lib/recharts";
import { formatChartData } from "@/utils/charts";
const CoinChart = ({ chartData }: { chartData: ChartPoint[] }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  const { formattedData, ticks } = formatChartData(chartData);
  return (
    <div className="bg-white dark:bg-zinc-900/80 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 p-6 shadow-lg backdrop-blur-xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Price Trend
          </h2>
        </div>

        <span className="px-4 py-1.5 bg-gradient-to-r from-sky-500/10 to-blue-500/10 dark:from-sky-500/20 dark:to-blue-500/20 text-sky-600 dark:text-sky-300 text-xs font-bold rounded-full border border-sky-200 dark:border-sky-500/30">
          Last 7 Days
        </span>
      </div>

      {mounted ? (
        <Charts.ResponsiveContainer width="100%" height={340}>
          <Charts.AreaChart
            data={formattedData}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 30,
            }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <Charts.CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#52525b"
              opacity={0.25}
            />

            <Charts.XAxis
              dataKey="date"
              type="number"
              domain={["dataMin", "dataMax"]}
              ticks={ticks}
              interval={0}
              height={60}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#71717a" }}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />

            <Charts.YAxis
              width={80}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#71717a" }}
              tickFormatter={(value) => `$${Number(value).toLocaleString("en-US")}`}
            />

            <Charts.Tooltip
              formatter={(value) => [
                `$${Number(value ?? 0).toLocaleString("en-US")}`,
                "Price",
              ]}
              labelFormatter={(label) =>
                new Date(Number(label)).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })
              }
              contentStyle={{
                backgroundColor: "rgba(24, 24, 27, 0.95)",
                border: "1px solid rgba(14, 165, 233, 0.3)",
                borderRadius: "12px",
                color: "#fff",
              }}
              itemStyle={{
                color: "#fff",
              }}
              labelStyle={{
                color: "#d4d4d8",
              }}
              cursor={{
                stroke: "#0ea5e9",
                strokeWidth: 2,
                strokeDasharray: "4 4",
              }}
            />

            <Charts.Area
              type="monotone"
              dataKey="price"
              stroke="url(#strokeGradient)"
              strokeWidth={3}
              fill="url(#colorPrice)"
              fillOpacity={1}
              style={{
                filter: "url(#glow)",
              }}
              activeDot={{
                r: 6,
                fill: "#0ea5e9",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </Charts.AreaChart>
        </Charts.ResponsiveContainer>
      ) : (
        <div style={{ height: 340, width: "100%" }} />
      )}
    </div>
  );
};

export default CoinChart;