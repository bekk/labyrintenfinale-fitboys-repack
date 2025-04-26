import { participants, type Participant } from "backend/dataset/participants";
import ParticipantCard from "./ParticipantCard";

interface Props {
  selectedDemography: Participant | null;
  setSelectedDemography: (demography: Participant | null) => void;
}

const ParticipantGrid = ({
  selectedDemography,
  setSelectedDemography,
}: Props) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-6">Velg deltaker</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participants.map((participant) => (
            <ParticipantCard
              key={participant.name}
              participant={participant}
              selectedDemography={selectedDemography}
              setSelectedDemography={setSelectedDemography}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantGrid;
