import type { Route } from "./+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { NavLink, useNavigate } from "react-router";
import QuestionMarkIcon from "~/icons/QuestionMarkIcon";
import { ArrowRight } from "lucide-react";
import { hosts } from "backend/dataset/hosts";
import HostCard from "~/components/HostCard";
import LocationCard from "~/components/LocationCard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Reniew" }];
}

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="pt-16 p-4 container mx-auto">
        <div className="flex flex-col my-8">
          <h1 className="text-2xl md:text-4xl font-bold underline">
            1. Målgrupper
          </h1>
          <section className="w-full mt-8 flex flex-row gap-4 overflow-x-auto">
            grafer
          </section>
        </div>

        <div className="flex flex-col my-8">
          <h1 className="text-2xl md:text-4xl font-bold underline">
            2. Konsepter
          </h1>
          <section className="w-full mt-8 flex flex-row gap-4 overflow-x-auto"></section>
        </div>

        <div className="flex flex-col my-8">
          <h1 className="text-2xl md:text-4xl font-bold underline">
            3. Steder
          </h1>
          <section className="w-full mt-8 flex flex-row gap-4 overflow-x-auto">
            <LocationCard
              location={{
                name: "Hardangerfjorden",
                image: "/hardangerfjorden.jpeg",
                description:
                  "Hardangerfjorden er en av de vakreste fjordene i Norge, kjent for sine bratte fjellsider og fruktbare daler.",
                demographics: [
                  { ageGroup: "18-24", score: 10, gender: "male" },
                ],
              }}
            />
          </section>
        </div>

        <div className="flex flex-col my-8">
          <h1 className="text-2xl md:text-4xl font-bold underline ">4. Vert</h1>
          <section className="w-full mt-8 flex flex-row gap-4 overflow-x-auto">
            {hosts.map((host) => (
              <HostCard key={host.name} host={host} />
            ))}
          </section>
          <div className="flex justify-end">
            <ArrowRight className="size-10 text-gray-800" />
          </div>
        </div>
      </div>
    </>
  );
}
