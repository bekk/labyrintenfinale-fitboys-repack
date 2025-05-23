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
import DemographicGrid from "~/components/Demographic/DemographicGrid";
import type { Demography } from "backend/dataset/demography";
import Result from "~/components/Result/Result";
import type { ResultBody } from "backend/api/ai";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Reniew" }];
}

export default function Start() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedHost, setSelectedHost] = useState<Host | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [selectedParticipant, setSelectedParticipant] =
    useState<Participant | null>(null);

  const [selectedDemography, setSelectedDemography] =
    useState<Demography | null>(null);

  const [response, setResponse] = useState<ResultBody | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const goToNextStep = () => {
    if (currentStep + 1 === steps.length - 1) {
      handleSubmit();
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: 0,
      title: "Målgruppe",
    },
    { number: 1, title: "Deltakere" },
    { number: 2, title: "Elementer" },
    { number: 3, title: "Steder" },
    { number: 4, title: "Vert" },
    { number: 5, title: "Resultat" },
  ];

  const handleSubmit = async () => {
    const toProcess = {
      demography: selectedDemography,
      element: selectedElement,
      location: selectedLocation,
      host: selectedHost,
      participant: selectedParticipant,
    };

    try {
      setIsLoading(true);
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ toProcess }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setResponse(data.response);
      toast.success("TV programmet er klart!");
    } catch (error) {
      console.error("Error fetching AI response:", error);
      toast.error("Noe gikk galt. Vennligst prøv igjen.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinish = () => {
    navigate("/");
    setCurrentStep(0);
    setSelectedHost(null);
    setSelectedLocation(null);
    setSelectedElement(null);
    setSelectedParticipant(null);
    setSelectedDemography(null);
    setResponse(null);
    setIsLoading(false);
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
          {currentStep === 0 && (
            <DemographicGrid
              selectedDemographic={selectedDemography}
              setSelectedDemographic={setSelectedDemography}
            />
          )}

          {currentStep === 1 && (
            <ParticipantGrid
              selectedParticipant={selectedParticipant}
              setSelectedParticipant={setSelectedParticipant}
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
            <Result
              isLoading={isLoading}
              response={response}
              selectedLocation={selectedLocation}
              selectedHost={selectedHost}
              selectedDemography={selectedDemography}
              selectedElement={selectedElement}
              selectedParticipant={selectedParticipant}
            />
          )}
        </motion.div>

        <div className="flex justify-between mt-12 mb-8">
          {currentStep > 0 ? (
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
              Avslutt <Check className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
