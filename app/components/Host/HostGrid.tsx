import { hosts } from "backend/dataset/hosts";
import HostCard from "./HostCard";
import { Check } from "lucide-react";

interface Props {
  selectedHost: string | null;
  setSelectedHost: (host: string | null) => void;
}

const HostGrid = ({ selectedHost, setSelectedHost }: Props) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Vert</h1>
        <div className="text-sm text-gray-500">Steg 4</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-6">Velg verten for ditt arrangement.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hosts.map((host) => (
            <div
              key={host.name}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedHost === host.name
                  ? "ring-2 ring-blue-500 scale-[1.02]"
                  : "hover:shadow-lg"
              }`}
              onClick={() => setSelectedHost(host.name)}
            >
              <HostCard host={host} />
              {selectedHost === host.name && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostGrid;
