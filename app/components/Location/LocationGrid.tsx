import { Check } from "lucide-react";
import LocationCard from "./LocationCard";
import { locations } from "backend/dataset/locations";
import type { Location } from "backend/dataset/locations";

interface Props {
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location) => void;
}

const LocationGrid = ({ selectedLocation, setSelectedLocation }: Props) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Steder</h1>
        <div className="text-sm text-gray-500">Steg 3</div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-6">Velg stedet for ditt TV program.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <LocationCard
              location={location}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationGrid;
