import type { Route } from "./+types/home";
import { ButtonWithIcon } from "~/components/ButtonWithIcon/ButtonWithIcon";
import { NavLink, useNavigate } from "react-router";
import QuestionMarkIcon from "~/icons/QuestionMarkIcon";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Denne tittelen vises i fanen" }];
}

export default function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="pt-16 p-4 container mx-auto">
        <p>
          {" "}
          Velkommen! Denne applikasjonen kan dere bruke for å vise frem ideen
          deres!{" "}
        </p>
        <NavLink to="/more-info">
          <a className="text-blue-600 underline hover:text-blue-800">
            Du kan finne mer info her
          </a>
        </NavLink>

        <img
          src="/icegif-1614.gif"
          alt="Icegif"
          className="w-1/2 mx-auto mt-4 rounded-lg shadow-lg"
        />
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
