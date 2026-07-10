import { ChartPoint } from "@/types/types";

export const formatChartData = (chartData: ChartPoint[]) => {
  const formattedData = chartData.map((item) => ({
    ...item,
    date:
      typeof item.date === "string" ? new Date(item.date).getTime() : item.date,
  }));

  const uniqueDays = new Set<string>();
  const ticks: number[] = [];

  formattedData.forEach((point) => {
    const day = new Date(point.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    if (!uniqueDays.has(day)) {
      uniqueDays.add(day);
      ticks.push(point.date);
    }
  });

  return { formattedData, ticks };
};
