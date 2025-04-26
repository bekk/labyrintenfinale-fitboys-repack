"use client";

import { Progress } from "../ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { Demography } from "../../../backend/dataset/demography";
import toast from "react-hot-toast";
import { PlusCircle } from "lucide-react";

interface DemographicCardsProps {
  demographics: Demography[];
  selectedDemographic: Demography | null;
  setSelectedDemographic: (demographic: Demography | null) => void;
}

export function DemographicCards({
  demographics,
  selectedDemographic,
  setSelectedDemographic,
}: DemographicCardsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {demographics.map((demographic) => (
        <Card
          key={demographic.ageGroup}
          className={`relative  group shadow-md hover:shadow-xl transition-all bg-white border border-gray-100 rounded-xl duration-300 ${
            selectedDemographic?.ageGroup === demographic.ageGroup
              ? "ring-2 ring-blue-500 scale-[1.02]"
              : "hover:shadow-lg"
          }`}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{demographic.ageGroup}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Score</span>
                  <span className="text-sm font-medium">
                    {demographic.score}/100
                  </span>
                </div>
                <Progress value={demographic.score} className="h-2" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Markedsandel</span>
                  <span className="text-sm font-medium">
                    {Math.round((demographic.marketShare || 0) * 100)}%
                  </span>
                </div>
                <Progress
                  value={(demographic.marketShare || 0) * 100}
                  className="h-2"
                />
              </div>

              <div className="pt-2 mb-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Effektivitetsindeks
                  </span>
                  <span className="text-sm font-medium">
                    {Math.round(
                      demographic.score /
                        ((demographic.marketShare || 0.1) * 100)
                    )}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toast.success(
                  `Du har valgt ${demographic.ageGroup} som målgruppe!`
                );
                setSelectedDemographic(demographic);
              }}
              className="absolute bottom-1 right-1 p-2"
            >
              <PlusCircle
                className={`w-6 h-6 transition-all duration-300 ${
                  selectedDemographic?.ageGroup === demographic.ageGroup
                    ? "text-blue-500 rotate-90"
                    : "hover:text-blue-500 text-gray-500 group-hover:rotate-90"
                }`}
              />
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
