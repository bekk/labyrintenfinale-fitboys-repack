import { Bar, BarChart, XAxis, YAxis } from "recharts";
import type { Demography } from "../../../backend/dataset/demography";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

interface DemographicBarChartProps {
  demographics: Demography[];
}

export function DemographicBarChart({
  demographics,
}: DemographicBarChartProps) {
  const chartData = demographics.map((item) => ({
    name: item.ageGroup,
    score: item.score,
  }));

  return (
    <ChartContainer
      config={{
        score: {
          label: "Score",
          color: "#1E7A34",
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
        <defs>
          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#28A745" stopOpacity={1} />
            <stop offset="100%" stopColor="#81C784" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          stroke="#6C63FF"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          domain={[0, 100]}
          stroke="#6C63FF"
        />
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <Bar
          dataKey="score"
          fill="url(#colorScore)"
          radius={[8, 8, 0, 0]}
          barSize={30}
        />
      </BarChart>
    </ChartContainer>
  );
}
