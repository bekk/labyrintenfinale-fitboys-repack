"use client";

import { Check } from "lucide-react";
import ResultLoading from "./ResultLoading";
import type { Location } from "backend/dataset/locations";
import type { Host } from "backend/dataset/hosts";
import type { Demography } from "backend/dataset/demography";
import type { Element } from "backend/dataset/elements";
import type { Participant } from "backend/dataset/participants";
import { useState } from "react";

interface Props {
  isLoading: boolean;
  response: string | null;
  selectedLocation: Location | null;
  selectedHost: Host | null;
  selectedDemography: Demography | null;
  selectedElement: Element | null;
  selectedParticipant: Participant | null;
}

const Result = ({
  isLoading,
  response,
  selectedLocation,
  selectedHost,
  selectedDemography,
  selectedElement,
  selectedParticipant,
}: Props) => {
  const [satisfaction, setSatisfaction] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Resultat
        </h1>
        <div className="text-sm text-gray-500">Steg 5</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        {isLoading ? (
          <ResultLoading />
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Ditt TV program er klart!
            </h2>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Vi har satt sammen det perfekte TV program basert på dine valg.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left my-8">
              {selectedLocation && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Sted</h3>
                  <p className="text-gray-700">{selectedLocation.name}</p>
                </div>
              )}

              {selectedHost && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Vert</h3>
                  <p className="text-gray-700">{selectedHost.name}</p>
                </div>
              )}

              {selectedDemography && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Målgruppe</h3>
                  <p className="text-gray-700">{selectedDemography.ageGroup}</p>
                </div>
              )}
              {selectedElement && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Element</h3>
                  <p className="text-gray-700">{selectedElement.name}</p>
                </div>
              )}

              {selectedParticipant && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Deltaker</h3>
                  <p className="text-gray-700">{selectedParticipant.name}</p>
                </div>
              )}
            </div>

            <div className="prose max-w-none text-left">
              {response ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: response
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br />"),
                  }}
                />
              ) : null}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Hvor fornøyd var du med resultatet?
              </h3>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => setSatisfaction(rating)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-colors ${
                      satisfaction === rating
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    aria-label={`Rate ${rating} out of 5`}
                  >
                    {rating}
                  </button>
                ))}
              </div>
              {satisfaction !== null && (
                <p className="mt-4 text-green-600 font-medium">
                  Takk for din tilbakemelding!
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
