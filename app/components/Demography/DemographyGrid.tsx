import DemographyCard from "./DemographyCard";
import { participants, type Participant } from "backend/dataset/participants";

interface Props {
  selectedDemography: Participant | null;
  setSelectedDemography: (demography: Participant | null) => void;
}

const DemographyGrid = ({
  selectedDemography,
  setSelectedDemography,
}: Props) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Målgrupper
        </h1>
        <div className="text-sm text-gray-500">Steg 1</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-6">Velg målgruppe.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.map((participant) => (
            <div
              key={participant.name}
              className={`relative cursor-pointer transition-all rounded-xl duration-300 ${
                selectedDemography?.name === participant.name
                  ? "ring-2 ring-blue-500 scale-[1.02]"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedDemography(participant)}
            >
              <DemographyCard
                key={participant.name}
                participant={participant}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemographyGrid;
