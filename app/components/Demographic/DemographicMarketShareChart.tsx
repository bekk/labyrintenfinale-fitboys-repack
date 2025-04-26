import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { Demography } from "../../../backend/dataset/demography";

interface DemographicMarketShareChartProps {
  demographics: Demography[];
}

export function DemographicMarketShareChart({
  demographics,
}: DemographicMarketShareChartProps) {
  const chartData = demographics.map((item) => ({
    name: item.ageGroup,
    value: (item.marketShare || 0) * 100,
  }));

  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--primary))",
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-3 border rounded-lg shadow-sm">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-sm">{`Markedsandel: ${payload[0].value.toFixed(
            1
          )}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
}
