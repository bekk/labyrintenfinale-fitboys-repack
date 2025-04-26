import type { Route } from "./+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { NavLink, useNavigate } from "react-router";
import QuestionMarkIcon from "~/icons/QuestionMarkIcon";
import { ArrowRight } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Reniew" }];
}

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="pt-16 p-4 container mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl font-bold underline ">Vert</h1>
          <section className="w-full mt-8 flex flex-row gap-4">
            <div className="bg-red-500 max-w-md p-4 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold">Jon Almaas</h2>

              <h4>Tv vert</h4>

              <img src="/icegif-1614.gif" alt="Jon Almaas" />
            </div>
            <div className="bg-red-500 max-w-md p-4 rounded-xl shadow-lg">
              <h2 className="text-4xl font-bold">Siv Jensen</h2>

              <h4>Tv vert</h4>

              <img src="/icegif-1614.gif" alt="Jon Almaas" />
            </div>
          </section>
          <div className="flex justify-end">
            <ArrowRight className="size-10 text-gray-800" />
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10">
        <ButtonWithIcon
          text="Hjelp"
          onClick={() => navigate("/hjelp")}
          icon={<QuestionMarkIcon />}
        />
      </div>
    </>
  );
}
