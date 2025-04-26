"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { MapPin, Users, Info, ArrowRight } from "lucide-react";
import type { Location } from "../../backend/dataset/locations";
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

interface Props {
  location: Location;
}

const GENDER_COLORS = {
  male: "#3b82f6",
  female: "#ec4899",
  other: "#10b981",
};

const LocationCard = ({ location }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Group demographics by age group for the bar chart
  const ageGroupData = location.demographics.reduce((acc, item) => {
    if (!acc[item.ageGroup]) {
      acc[item.ageGroup] = {
        ageGroup: item.ageGroup,
        male: 0,
        female: 0,
        other: 0,
      };
    }
    acc[item.ageGroup][item.gender] += item.score;
    return acc;
  }, {} as Record<string, any>);

  // Group demographics by gender for the pie chart
  const genderData = location.demographics.reduce((acc, item) => {
    if (!acc[item.gender]) {
      acc[item.gender] = 0;
    }
    acc[item.gender] += item.score;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(genderData).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <>
      <article
        onClick={() => setIsOpen(true)}
        className="group flex flex-col max-w-lg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-teal-50 to-white border border-teal-100"
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

            <ArrowRight className="w-4 h-4 text-teal-600 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </article>

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

            <div>
              <h3 className="text-lg font-semibold flex items-center mb-4">
                <Users className="w-5 h-5 mr-2 text-teal-600" />
                Kjønnsfordeling
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            GENDER_COLORS[
                              entry.name as keyof typeof GENDER_COLORS
                            ]
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
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
