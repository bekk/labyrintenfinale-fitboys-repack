"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Users, Info, PlusCircle } from "lucide-react";
import type { Location } from "../../../backend/dataset/locations";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import toast from "react-hot-toast";

interface Props {
  location: Location;
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location) => void;
}

const GENDER_COLORS = {
  male: "#3b82f6",
  female: "#ec4899",
  other: "#10b981",
};

const LocationCard = ({
  location,
  selectedLocation,
  setSelectedLocation,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const ageGroupData = location.demographics.reduce((acc, item) => {
    if (!acc[item.ageGroup]) {
      acc[item.ageGroup] = {
        ageGroup: item.ageGroup,
        male: 0,
        female: 0,
        other: 0,
      };
    }
    return acc;
  }, {} as Record<string, any>);

  return (
    <>
      <div
        className={`relative cursor-pointer group relative  transition-all bg-gradient-to-br from-teal-50 to-white  border-teal-100 border shadow-lg hover:shadow-xl  rounded-xl duration-300 ${
          selectedLocation?.name === location.name
            ? "ring-2 ring-blue-500 scale-[1.02]"
            : "hover:shadow-lg"
        }`}
      >
        <article
          onClick={() => setIsOpen(true)}
          className="group flex flex-col max-w-lg overflow-hidden transition-all duration-300 cursor-pointer"
        >
          <div className="relative overflow-hidden h-48">
            <img
              src={location.image || "hardangerfjorden.jpeg"}
              alt={location.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h2 className="text-2xl font-bold text-white mb-1">
                {location.name}
              </h2>
            </div>
          </div>

          <div className="p-4">
            <p className="text-gray-600 line-clamp-2 text-sm">
              {location.description}
            </p>

            <div className="mt-3 flex items-center text-teal-600">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">
                {location.demographics.length} demografier
              </span>
            </div>

            <div className="mt-3 flex justify-between items-center">
              <span className="text-xs text-gray-500">Klikk for å se mer </span>
            </div>
          </div>
        </article>
        <button
          onClick={() => {
            toast.success(`Du har valgt ${location.name} som sted!`);
            setSelectedLocation(location);
          }}
          className="absolute bottom-1 right-1 p-2"
        >
          <PlusCircle
            className={`w-6 h-6  transition-all duration-300 ${
              selectedLocation?.name === location.name
                ? "text-blue-500 rotate-90"
                : "hover:text-blue-500 text-gray-500 group-hover:rotate-90"
            }`}
          />
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] h-[80vh] overflow-y-auto p-0 ">
          <div className="relative h-64">
            <img
              src={location.image || "hardangerfjorden.jpeg"}
              alt={location.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <DialogTitle className="text-3xl font-bold text-white mb-2">
                {location.name}
              </DialogTitle>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold flex items-center mb-2">
                <Info className="w-5 h-5 mr-2 text-teal-600" />
                Om
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {location.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold flex items-center mb-4">
                <Users className="w-5 h-5 mr-2 text-teal-600" />
                Demografi
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={Object.values(ageGroupData)}>
                    <XAxis dataKey="ageGroup" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="male" name="Male" fill={GENDER_COLORS.male} />
                    <Bar
                      dataKey="female"
                      name="Female"
                      fill={GENDER_COLORS.female}
                    />
                    <Bar
                      dataKey="other"
                      name="Other"
                      fill={GENDER_COLORS.other}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LocationCard;
