import { useState } from "react";
import type { Participant } from "backend/dataset/participants";
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
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  User,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  PlusCircle,
} from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  participant: Participant;
  selectedParticipant: Participant | null;
  setSelectedParticipant: (demography: Participant | null) => void;
}

const ParticipantCard = ({
  participant,
  selectedParticipant,
  setSelectedParticipant,
}: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const averageDemographicScore =
    participant.demographics.length > 0
      ? participant.demographics.reduce((sum, item) => sum + item.score, 0) /
        participant.demographics.length
      : 0;

  const getInterestLevel = (score: number) => {
    if (score >= 75) return { text: "Høy", value: 80 };
    if (score >= 50) return { text: "Medium", value: 60 };
    return { text: "Lav", value: 30 };
  };

  const calculateProfitability = (
    demographics: typeof participant.demographics
  ) => {
    const youngAdultScore =
      demographics.find((d) => d.ageGroup === "Unge voksne")?.score || 0;
    const familyScore =
      demographics.find((d) => d.ageGroup === "Familier")?.score || 0;

    const profitabilityScore = youngAdultScore * 0.6 + familyScore * 0.4;

    if (profitabilityScore >= 75) return { text: "Høy", value: 80 };
    if (profitabilityScore >= 50) return { text: "Medium", value: 60 };
    return { text: "Lav", value: 30 };
  };

  const interestLevel = getInterestLevel(averageDemographicScore);
  const profitability = calculateProfitability(participant.demographics);

  const trendData = [
    {
      month: "Jan",
      interest: Math.round(interestLevel.value * 0.9),
      profit: Math.round(profitability.value * 0.85),
    },
    {
      month: "Feb",
      interest: Math.round(interestLevel.value * 0.95),
      profit: Math.round(profitability.value * 0.9),
    },
    {
      month: "Mar",
      interest: Math.round(interestLevel.value * 0.98),
      profit: Math.round(profitability.value * 0.95),
    },
    {
      month: "Apr",
      interest: Math.round(interestLevel.value),
      profit: Math.round(profitability.value),
    },
    {
      month: "May",
      interest: Math.round(interestLevel.value * 1.02),
      profit: Math.round(profitability.value * 1.05),
    },
    {
      month: "Jun",
      interest: Math.round(interestLevel.value * 1.05),
      profit: Math.round(profitability.value * 1.1),
    },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82ca9d",
  ];

  const pieData = participant.demographics.map((item) => ({
    name: item.ageGroup,
    value: item.score,
  }));

  return (
    <>
      <div
        key={participant.name}
        className={`relative cursor-pointer transition-all bg-white border rounded-lg hover:shadow-md  duration-300 ${
          selectedParticipant?.name === participant.name
            ? "ring-2 ring-blue-500 scale-[1.02]"
            : "hover:shadow-lg"
        }`}
      >
        <div
          className=" p-4 cursor-pointer hover:border-blue-500  transition-all"
          onClick={() => setDialogOpen(true)}
        >
          <h3 className="font-medium text-gray-800">{participant.name}</h3>
          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Interesse</span>
              <span className="text-gray-800">{interestLevel.text}</span>
            </div>
            <Progress value={interestLevel.value} className="h-1.5" />

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Lønnsomhet</span>
              <span className="text-gray-800">{profitability.text}</span>
            </div>
            <Progress value={profitability.value} className="h-1.5" />
          </div>
        </div>
        <button
          onClick={() => {
            toast.success(`Du har valgt ${participant.name} som demografi!`);
            setSelectedParticipant(participant);
          }}
          className="w-full  flex justify-end p-2"
        >
          <PlusCircle
            className={`w-6 h-6  transition-all duration-300 ${
              selectedParticipant?.name === participant.name
                ? "text-blue-500 rotate-90"
                : "hover:text-blue-500 text-gray-500 group-hover:rotate-90"
            }`}
          />
        </button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[1200px] h-[80vh] overflow-y-auto p-4">
          <DialogHeader>
            <DialogTitle className="text-2xl">{participant.name}</DialogTitle>
            <DialogDescription>{participant.description}</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Oversikt</TabsTrigger>
              <TabsTrigger value="demographics">Demografi</TabsTrigger>
              <TabsTrigger value="trends">Trender</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <img
                      src={
                        participant.image ||
                        "/placeholder.svg?height=200&width=400&query=participant"
                      }
                      alt={participant.name}
                      className="object-cover h-48 w-full rounded-lg"
                    />
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Om {participant.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{participant.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <Target className="h-4 w-4 mr-2 text-blue-500" />
                          Interesse
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {interestLevel.text}
                        </div>
                        <Progress
                          value={interestLevel.value}
                          className="h-2 mt-2"
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                          <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                          Lønnsomhet
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">
                          {profitability.text}
                        </div>
                        <Progress
                          value={profitability.value}
                          className="h-2 mt-2"
                        />
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        Demografisk Fordeling
                      </CardTitle>
                      <CardDescription>
                        Fordeling av score på tvers av aldersgrupper
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
                        className=""
                      >
                        <BarChart
                          accessibilityLayer
                          data={participant.demographics}
                          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                        >
                          <XAxis
                            dataKey="ageGroup"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                            tickMargin={5}
                          />
                          <YAxis hide domain={[0, 100]} />
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
                </div>
              </div>
            </TabsContent>

            <TabsContent value="demographics" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Demografisk Analyse</CardTitle>
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
                        data={participant.demographics}
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

                <Card>
                  <CardHeader>
                    <CardTitle>Demografisk Distribusjon</CardTitle>
                    <CardDescription>
                      Prosentvis fordeling mellom aldersgrupper
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
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          >
                            {pieData.map((entry, index) => (
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
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Detaljert Demografisk Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {participant.demographics.map((demo) => (
                      <div
                        key={demo.ageGroup}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="text-sm text-gray-500">
                          {demo.ageGroup}
                        </div>
                        <div className="text-2xl font-bold mt-1">
                          {demo.score}%
                        </div>
                        <Progress value={demo.score} className="h-2 mt-2" />
                        <p className="text-xs text-gray-500 mt-2">
                          {demo.score > 70
                            ? "Høy interesse i denne aldersgruppen"
                            : demo.score > 40
                            ? "Moderat interesse i denne aldersgruppen"
                            : "Lav interesse i denne aldersgruppen"}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Interesse og Lønnsomhet Trender</CardTitle>
                  <CardDescription>
                    Utvikling over de siste 6 månedene
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      interest: {
                        label: "Interesse",
                        color: "hsl(var(--chart-3))",
                      },
                      profit: {
                        label: "Lønnsomhet",
                        color: "hsl(var(--chart-4))",
                      },
                    }}
                  >
                    <LineChart
                      data={trendData}
                      className="w-full "
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
                        dataKey="interest"
                        stroke="blue"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="profit"
                        stroke="green"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Deltaker Analyse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Sterkeste Aldersgrupper</h4>
                        <div className="mt-2">
                          {[...participant.demographics]
                            .sort((a, b) => b.score - a.score)
                            .slice(0, 2)
                            .map((demo) => (
                              <div
                                key={demo.ageGroup}
                                className="flex items-center justify-between py-2"
                              >
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-2 text-blue-500" />
                                  <span>{demo.ageGroup}</span>
                                </div>
                                <div className="font-medium">{demo.score}%</div>
                              </div>
                            ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium">Vekstpotensial</h4>
                        <div className="mt-2">
                          {[...participant.demographics]
                            .sort((a, b) => a.score - b.score)
                            .slice(0, 2)
                            .map((demo) => (
                              <div
                                key={demo.ageGroup}
                                className="flex items-center justify-between py-2"
                              >
                                <div className="flex items-center">
                                  <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                                  <span>{demo.ageGroup}</span>
                                </div>
                                <div className="font-medium">{demo.score}%</div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Anbefalinger</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        Basert på demografisk data, anbefales følgende tiltak
                        for {participant.name}:
                      </p>

                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-blue-100 p-1 rounded-full mr-2 mt-0.5">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                          <span>
                            Fokuser markedsføring mot{" "}
                            {
                              [...participant.demographics].sort(
                                (a, b) => b.score - a.score
                              )[0].ageGroup
                            }{" "}
                            for best respons.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-100 p-1 rounded-full mr-2 mt-0.5">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                          </div>
                          <span>
                            Utvikle strategier for å øke interesse blant{" "}
                            {
                              [...participant.demographics].sort(
                                (a, b) => a.score - b.score
                              )[0].ageGroup
                            }
                            .
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-100 p-1 rounded-full mr-2 mt-0.5">
                            <DollarSign className="h-4 w-4 text-purple-600" />
                          </div>
                          <span>
                            Lønnsomheten er {profitability.text.toLowerCase()}.{" "}
                            {profitability.text === "Høy"
                              ? "Fortsett med nåværende strategi."
                              : "Vurder prisstrategier for å øke lønnsomheten."}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ParticipantCard;
