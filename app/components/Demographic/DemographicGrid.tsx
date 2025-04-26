"use client";

import { BarChart3, PieChart, TrendingUp, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  demographics,
  type Demography,
} from "../../../backend/dataset/demography";
import { DemographicCards } from "./DemographicCards";
import { DemographicScoreChart } from "./DemographicScoreChart";
import { DemographicMarketShareChart } from "./DemographicMarketShareChart";
import { DemographicComparisonChart } from "./DemographicComparisonChart";

interface Props {
  selectedDemographic: Demography | null;
  setSelectedDemographic: (demographic: Demography | null) => void;
}

const DemographicGrid = ({
  selectedDemographic,
  setSelectedDemographic,
}: Props) => {
  const totalMarketShare =
    demographics.reduce((acc, curr) => acc + (curr.marketShare || 0), 0) /
    demographics.length;

  const averageScore =
    demographics.reduce((acc, curr) => acc + curr.score, 0) /
    demographics.length;

  const highestScoring = [...demographics].sort((a, b) => b.score - a.score)[0];

  const highestMarketShare = [...demographics].sort(
    (a, b) => (b.marketShare || 0) - (a.marketShare || 0)
  )[0];

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Gjennomsnittlig score
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(averageScore)}/100
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Basert på alle demografiske grupper
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total markedsandel
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(totalMarketShare * 100)}%
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Kombinert markedsandel for alle grupper
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Høyeste score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highestScoring.ageGroup}</div>
            <p className="text-xs text-muted-foreground mt-2">
              Score: {highestScoring.score}/100
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Største markedsandel
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {highestMarketShare.ageGroup}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Andel: {Math.round((highestMarketShare.marketShare || 0) * 100)}%
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">
            <Users className="w-4 h-4 mr-2" />
            Oversikt
          </TabsTrigger>
          <TabsTrigger value="scores">
            <BarChart3 className="w-4 h-4 mr-2" />
            Score
          </TabsTrigger>
          <TabsTrigger value="market-share">
            <PieChart className="w-4 h-4 mr-2" />
            Markedsandel
          </TabsTrigger>
          <TabsTrigger value="comparison">
            <TrendingUp className="w-4 h-4 mr-2" />
            Sammenligning
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <DemographicCards
            demographics={demographics}
            selectedDemographic={selectedDemographic}
            setSelectedDemographic={setSelectedDemographic}
          />
        </TabsContent>

        <TabsContent value="scores" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Demografisk score</CardTitle>
              <CardDescription>
                Sammenligning av score på tvers av demografiske grupper
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <DemographicScoreChart demographics={demographics} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market-share" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Markedsandel</CardTitle>
              <CardDescription>
                Fordeling av markedsandel mellom demografiske grupper
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <DemographicMarketShareChart demographics={demographics} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Score vs. Markedsandel</CardTitle>
              <CardDescription>
                Sammenligning av score og markedsandel for hver demografisk
                gruppe
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <DemographicComparisonChart demographics={demographics} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default DemographicGrid;
