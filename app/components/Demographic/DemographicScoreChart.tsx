"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import type { Demography } from "../../../backend/dataset/demography";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface DemographicScoreChartProps {
  demographics: Demography[];
}

export function DemographicScoreChart({
  demographics,
}: DemographicScoreChartProps) {
  const chartData = demographics.map((item) => ({
    name: item.ageGroup,
    score: item.score,
  }));

  return (
    <ChartContainer
      config={{
        score: {
          label: "Score",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-full w-full"
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          domain={[0, 100]}
        />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <Bar
          dataKey="score"
          fill="var(--color-score)"
          radius={[4, 4, 0, 0]}
          barSize={40}
        />
      </BarChart>
    </ChartContainer>
  );
}
