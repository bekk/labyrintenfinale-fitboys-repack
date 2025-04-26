import { useState } from "react";
import { Bar, BarChart, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { PieChart, Pie, Cell } from "recharts";
import { Progress } from "../ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import { PlusCircle } from "lucide-react";
import type { Element } from "../../../backend/dataset/elements";
import toast from "react-hot-toast";

interface Props {
  element: Element;

  selectedElement: Element | null;
  setSelectedElement: (element: Element | null) => void;
}

const ElementCard = ({
  element,
  selectedElement,
  setSelectedElement,
}: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const averageDemographicScore =
    element.demographics.length > 0
      ? element.demographics.reduce((sum, item) => sum + item.score, 0) /
        element.demographics.length
      : 0;

  const pieData = element.demographics.map((item) => ({
    name: item.ageGroup,
    value: item.score,
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82ca9d",
  ];

  const trendData = [
    { month: "Jan", score: Math.round(averageDemographicScore * 0.9) },
    { month: "Feb", score: Math.round(averageDemographicScore * 0.95) },
    { month: "Mar", score: Math.round(averageDemographicScore * 0.97) },
    { month: "Apr", score: Math.round(averageDemographicScore * 1.0) },
    { month: "May", score: Math.round(averageDemographicScore * 1.02) },
    { month: "Jun", score: Math.round(averageDemographicScore * 1.05) },
  ];

  return (
    <>
      <div
        className={`relative cursor-pointer group transition-all rounded-xl duration-300 ${
          selectedElement?.name === name
            ? "ring-2 ring-blue-500 scale-[1.02]"
            : "hover:shadow-lg"
        }`}
      >
        <div
          className="bg-white border rounded-lg overflow-hidden cursor-pointer hover:border-blue-500 hover:shadow-md transition-all"
          onClick={() => setDialogOpen(true)}
        >
          <div className="bg-gray-100 relative">
            <div className="p-4">
              <h3 className="text-black text-2xl font-bold">{element.name}</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Popularitet</span>
                <span className="text-gray-800">{0}%</span>
              </div>
              <Progress value={0} className="h-1.5" />
            </div>

            <div className="space-y-2 mt-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Demografi (Gjennomsnitt)</span>
                <span className="text-gray-800">
                  {averageDemographicScore.toFixed(1)}%
                </span>
              </div>
              <Progress value={averageDemographicScore} className="h-1.5" />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            toast.success(`Du har valgt ${element.name} som element!`);
            setSelectedElement(element);
          }}
          className="w-full bg-gray-100 flex justify-end p-2"
        >
          <PlusCircle
            className={`w-6 h-6  transition-all duration-300 ${
              selectedElement?.name === element.name
                ? "text-blue-500 rotate-90"
                : "hover:text-blue-500 text-gray-500 group-hover:rotate-90"
            }`}
          />
        </button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[800px] h-[80vh] overflow-y-auto p-4">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {element.name} - Detaljert Analyse
            </DialogTitle>
            <DialogDescription>
              Utforsk detaljert demografisk data og trender for {element.name}.
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Oversikt</TabsTrigger>
              <TabsTrigger value="demographics">Demografi</TabsTrigger>
              <TabsTrigger value="trends">Trender</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Popularitet</CardTitle>
                    <CardDescription>
                      Nåværende popularitetsnivå
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{0}%</div>
                    <Progress value={0} className="h-2 mt-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Demografisk Score</CardTitle>
                    <CardDescription>
                      Gjennomsnittlig score på tvers av aldersgrupper
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {averageDemographicScore.toFixed(1)}%
                    </div>
                    <Progress
                      value={averageDemographicScore}
                      className="h-2 mt-2"
                    />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Demografisk Distribusjon
                  </CardTitle>
                  <CardDescription>
                    Fordeling av score på tvers av aldersgrupper
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <ChartContainer
                      config={{
                        value: {
                          label: "Verdi",
                          color: "hsl(var(--chart-2))",
                        },
                      }}
                      className="h-[300px] w-[300px]"
                    >
                      <PieChart width={300} height={300}>
                        <Pie
                          data={pieData}
                          cx={150}
                          cy={150}
                          innerRadius={80}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {pieData.map((_, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Legend />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Detaljert Demografisk Analyse</CardTitle>
                  <CardDescription>
                    Score fordelt på aldersgrupper
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      score: {
                        label: "Score",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <BarChart
                      accessibilityLayer
                      data={element.demographics.map((item) => ({
                        ageGroup: item.ageGroup,
                        score: item.score,
                      }))}
                      margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="ageGroup"
                        tickLine={false}
                        axisLine={true}
                        tick={{ fontSize: 12 }}
                        tickMargin={10}
                      />
                      <YAxis
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Bar
                        dataKey="score"
                        fill="var(--color-score)"
                        radius={[4, 4, 0, 0]}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {element.demographics.map((demo) => (
                  <Card key={demo.ageGroup}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Aldersgruppe: {demo.ageGroup}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{demo.score}%</div>
                      <Progress value={demo.score} className="h-2 mt-2" />
                      <p className="text-sm text-gray-500 mt-2">
                        {demo.score > 70
                          ? "Høy popularitet i denne aldersgruppen"
                          : demo.score > 40
                          ? "Moderat popularitet i denne aldersgruppen"
                          : "Lav popularitet i denne aldersgruppen"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Popularitets Trender</CardTitle>
                  <CardDescription>
                    Utvikling over de siste 6 månedene
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      score: {
                        label: "Score",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <LineChart
                      data={trendData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="var(--color-score)"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analyse av Trender</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Nøkkeltall</h4>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">
                            Gjennomsnittlig Vekst
                          </div>
                          <div className="text-xl font-bold">+3%</div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">
                            Høyeste Score
                          </div>
                          <div className="text-xl font-bold">
                            {Math.max(...trendData.map((d) => d.score))}%
                          </div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <div className="text-sm text-gray-500">
                            Laveste Score
                          </div>
                          <div className="text-xl font-bold">
                            {Math.min(...trendData.map((d) => d.score))}%
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">Prognose</h4>
                      <p className="text-gray-700 mt-1">
                        Basert på nåværende trender, forventes {element.name} å
                        fortsette en positiv vekst i de kommende månedene. Den
                        sterkeste veksten ser ut til å være i aldersgruppen{" "}
                        {
                          element.demographics.reduce((prev, current) =>
                            prev.score > current.score ? prev : current
                          ).ageGroup
                        }
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ElementCard;
