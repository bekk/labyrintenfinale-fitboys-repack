import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import type { Demography } from "../../../backend/dataset/demography";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface DemographicComparisonChartProps {
  demographics: Demography[];
}

export function DemographicComparisonChart({
  demographics,
}: DemographicComparisonChartProps) {
  const chartData = demographics.map((item) => ({
    name: item.ageGroup,
    score: item.score,
    marketShare: Math.round((item.marketShare || 0) * 100),
  }));

  return (
    <ChartContainer
      config={{
        score: {
          label: "Score",
          color: "#1E7A34",
        },
        marketShare: {
          label: "Markedsandel (%)",
          color: "#4B0082",
        },
      }}
      className="h-full w-full"
    >
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <Legend />
        <Bar
          dataKey="score"
          name="Score"
          fill="var(--color-score)"
          radius={[4, 4, 0, 0]}
          barSize={20}
        />
        <Bar
          dataKey="marketShare"
          name="Markedsandel (%)"
          fill="var(--color-marketShare)"
          radius={[4, 4, 0, 0]}
          barSize={20}
        />
      </BarChart>
    </ChartContainer>
  );
}
