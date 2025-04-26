"use client";

import { useState } from "react";
import { PlusCircle, User, BarChart3, PieChart, Activity } from "lucide-react";
import type { Host } from "../../../backend/dataset/hosts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";
import toast from "react-hot-toast";
import { DemographicBarChart } from "../Demographic/DemographicBarChart";
import { DemographicRadarChart } from "../Demographic/DemographicRadarChart";

interface Props {
  host: Host;
  selectedHost: Host | null;
  setSelectedHost: (host: Host | null) => void;
}

const HostCard = ({ host, selectedHost, setSelectedHost }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const averageScore =
    host.demographics.reduce((acc, curr) => acc + curr.score, 0) /
    host.demographics.length;

  const highestDemographic = [...host.demographics].sort(
    (a, b) => b.score - a.score
  )[0];

  const lowestDemographic = [...host.demographics].sort(
    (a, b) => a.score - b.score
  )[0];

  return (
    <>
      <div
        className={`relative cursor-pointer group shadow-md hover:shadow-xl transition-all bg-white border border-gray-100 rounded-xl duration-300 ${
          selectedHost?.name === host.name
            ? "ring-2 ring-blue-500 scale-[1.02]"
            : "hover:shadow-lg"
        }`}
      >
        <article
          onClick={() => setIsOpen(true)}
          className="flex flex-col p-6 transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-4 mb-3">
            {host.image ? (
              <div className="relative w-16 h-16 rounded-full">
                <img
                  src={host.image || "/placeholder.svg"}
                  alt={host.name}
                  className="object-cover w-15 h-15 rounded-full"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold text-gray-800">{host.name}</h1>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-gray-500 line-clamp-2 text-sm">
              {host.description || "No description available"}
            </p>
          </div>
        </article>
        <button
          onClick={() => {
            toast.success(`Du har valgt ${host.name} som vert!`);
            setSelectedHost(host);
          }}
          className="w-full flex justify-end p-2"
        >
          <PlusCircle
            className={`w-6 h-6 transition-all duration-300 ${
              selectedHost?.name === host.name
                ? "text-blue-500 rotate-90"
                : "hover:text-blue-500 text-gray-500 group-hover:rotate-90"
            }`}
          />
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[1000px] p-0 overflow-hidden max-h-[80vh] overflow-y-auto">
          {host.image && (
            <div className="relative h-80">
              <img
                src={host.image || "hardangerfjorden.jpeg"}
                alt={host.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <DialogTitle className="text-3xl font-bold text-white mb-2">
                  {host.name}
                </DialogTitle>
              </div>
            </div>
          )}
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {host.description || "No description available"}
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">
                  <Activity className="w-4 h-4 mr-2" />
                  Oversikt
                </TabsTrigger>
                <TabsTrigger value="demographics">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Demografi
                </TabsTrigger>
                <TabsTrigger value="radar">
                  <PieChart className="w-4 h-4 mr-2" />
                  Målgruppe
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Gjennomsnittlig score
                      </CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round(averageScore)}/100
                      </div>
                      <Progress value={averageScore} className="mt-2" />
                      <p className="text-xs text-muted-foreground mt-2">
                        Basert på alle demografiske grupper
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Sterkeste målgruppe
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {highestDemographic.ageGroup}
                      </div>
                      <Progress
                        value={highestDemographic.score}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Score: {highestDemographic.score}/100
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Svakeste målgruppe
                      </CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {lowestDemographic.ageGroup}
                      </div>
                      <Progress
                        value={lowestDemographic.score}
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Score: {lowestDemographic.score}/100
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="demographics" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Demografisk fordeling</CardTitle>
                    <CardDescription>
                      Viser hvordan {host.name} scorer på tvers av ulike
                      aldersgrupper
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <DemographicBarChart demographics={host.demographics} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="radar" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Målgruppeprofil</CardTitle>
                    <CardDescription>
                      Visualisering av {host.name} sin appell til ulike
                      demografiske grupper
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <DemographicRadarChart demographics={host.demographics} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HostCard;
