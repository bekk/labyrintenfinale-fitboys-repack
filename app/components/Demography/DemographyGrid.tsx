import DemographyCard from "./DemographyCard";
import { participants } from "backend/dataset/participants";

const DemographyGrid = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Målgrupper
        </h1>
        <div className="text-sm text-gray-500">Steg 1</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-6">
          Velg målgruppen for ditt arrangement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.map((participant) => (
            <DemographyCard key={participant.name} participant={participant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemographyGrid;
