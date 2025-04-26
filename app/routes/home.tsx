"use client";

import { useState } from "react";
import type { Route } from "./+types/home";
import { useNavigate } from "react-router";
import { ArrowRight, ArrowLeft, Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "~/components/ui/progress";
import { Button } from "~/components/ui/button";
import LocationGrid from "~/components/Location/LocationGrid";
import HostGrid from "~/components/Host/HostGrid";
import ElementGrid from "~/components/Element/ElementGrid";
import type { Host } from "backend/dataset/hosts";
import type { Location } from "backend/dataset/locations";
import type { Element } from "backend/dataset/elements";
import type { Participant } from "backend/dataset/participants";
import toast from "react-hot-toast";
import ParticipantGrid from "~/components/Participant/ParticipantGrid";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Reniew" }];
}

export default function Home() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedHost, setSelectedHost] = useState<Host | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [selectedDemography, setSelectedDemography] =
    useState<Participant | null>(null);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const goToNextStep = () => {
    switch (currentStep) {
      case 1:
        if (!selectedDemography) {
          toast.error("Vennligst velg en deltakergruppe.");
          return;
        }
        break;
      case 2:
        if (!selectedElement) {
          toast.error("Vennligst velg et element.");
          return;
        }
        break;
      case 3:
        if (!selectedLocation) {
          toast.error("Vennligst velg et sted.");
          return;
        }
        break;
      case 4:
        if (!selectedHost) {
          toast.error("Vennligst velg en vert.");
          return;
        }
        break;
      case 5:
        break;
      default:
        break;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const steps = [
    { number: 1, title: "Deltakere" },
    { number: 2, title: "Elementer" },
    { number: 3, title: "Steder" },
    { number: 4, title: "Vert" },
    { number: 5, title: "Resultat" },
  ];

  const handleFinish = () => {
    if (!selectedDemography || !selectedElement || !selectedLocation) {
      toast.error("Vennligst velg alle alternativer.");
      return;
    }

    //API kall her
    console.log(
      selectedDemography,
      selectedElement,
      selectedLocation,
      selectedHost
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-500">
              Steg {currentStep} av {totalSteps}
            </div>
          </div>

          <Progress value={progress} className="h-2" />

          <div className="flex justify-between mt-4 overflow-x-auto py-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex items-center ${
                  currentStep === step.number
                    ? "text-blue-600"
                    : currentStep > step.number
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 
                  ${
                    currentStep === step.number
                      ? "bg-blue-100 border-2 border-blue-600"
                      : currentStep > step.number
                      ? "bg-green-100"
                      : "bg-gray-100"
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                <span className="text-sm font-medium hidden sm:block">
                  {step.title}
                </span>
                {step.number < totalSteps && (
                  <ChevronRight className="w-4 h-4 mx-2 hidden sm:block text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 pt-8">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <ParticipantGrid
              selectedDemography={selectedDemography}
              setSelectedDemography={setSelectedDemography}
            />
          )}

          {currentStep === 2 && (
            <ElementGrid
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
            />
          )}

          {currentStep === 3 && (
            <LocationGrid
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          )}

          {currentStep === 4 && (
            <HostGrid
              selectedHost={selectedHost}
              setSelectedHost={setSelectedHost}
            />
          )}

          {currentStep === 5 && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Resultat
                </h1>
                <div className="text-sm text-gray-500">Steg 5</div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ditt TV program er klart!
                  </h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-8">
                    Vi har satt sammen det perfekte TV program basert på dine
                    valg.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
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

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Deltaker
                      </h3>
                      <p className="text-gray-700">Unge voksne</p>
                    </div>
                  </div>

                  <Button
                    className="mt-8 cursor-pointer"
                    size="lg"
                    onClick={() => {
                      console.log(
                        selectedDemography,
                        selectedElement,
                        selectedLocation,
                        selectedHost
                      );
                    }}
                  >
                    Se detaljer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="flex justify-between mt-12 mb-8">
          {currentStep > 1 ? (
            <Button
              variant="outline"
              onClick={goToPreviousStep}
              className="flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Tilbake
            </Button>
          ) : (
            <div></div>
          )}

          {currentStep < totalSteps ? (
            <Button
              onClick={goToNextStep}
              className="flex items-center gap-2 cursor-pointer"
            >
              Neste <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleFinish}
              className="flex items-center gap-2 cursor-pointer bg-green-700 hover:bg-green-800 text-white"
            >
              Fullfør <Check className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
