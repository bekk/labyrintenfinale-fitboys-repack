import { hosts, type Host } from "backend/dataset/hosts";
import HostCard from "./HostCard";
import { Check } from "lucide-react";

interface Props {
  selectedHost: Host | null;
  setSelectedHost: (host: Host | null) => void;
}

const HostGrid = ({ selectedHost, setSelectedHost }: Props) => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-6">Velg vert.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hosts.map((host) => (
            <HostCard
              key={host.name}
              host={host}
              selectedHost={selectedHost}
              setSelectedHost={setSelectedHost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostGrid;
