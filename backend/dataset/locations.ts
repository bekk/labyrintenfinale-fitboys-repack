import type { Demography } from "./demography";

export type Location = {
  name: string;
  image: string;
  description: string;
  demographics: Demography[];
};

const locations: Location[] = [
  {
    name: "Operaen i Oslo",
    image: "/images/operaen.jpg",
    description:
      "Operaen i Oslo er en moderne operabygg med en spektakulær utsikt over Oslofjorden. Den er kjent for sin unike arkitektur og tilbyr et variert program av operaer og konserter.",
    demographics: [{ ageGroup: "18-24", gender: "male", score: 10 }],
  },
];
