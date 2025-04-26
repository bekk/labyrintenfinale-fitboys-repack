import type { Demography } from "./demography";

export type Host = {
  name: string;
  image: string;
  position: string;
  description: string;
  demographics: Demography[];
};

export const hosts: Host[] = [
  {
    name: "Jon Almaas",
    image: "/jon_almaas.jpg",
    position: "TV-programleder",
    description:
      "Jon Almaas er en norsk TV-programleder og journalist. Han er kjent for sin humor og sitt engasjement i ulike TV-programmer.",
    demographics: [
      { ageGroup: "18-24", gender: "male", score: 85 },
      { ageGroup: "25-34", gender: "female", score: 55 },
      { ageGroup: "35-44", gender: "male", score: 72 },
      { ageGroup: "45-54", gender: "female", score: 40 },
      { ageGroup: "55-64", gender: "other", score: 20 },
    ],
  },
  {
    name: "Anne Lindmo",
    image: "/images/anne-lindmo.jpg",
    position: "TV-programleder",
    description:
      "Anne Lindmo er en norsk radioprogramleder og forfatter, mest kjent fra TV-programmet ‘Lindmo’ på NRK.",
    demographics: [
      { ageGroup: "18-24", gender: "female", score: 60 },
      { ageGroup: "25-34", gender: "female", score: 88 },
      { ageGroup: "35-44", gender: "male", score: 75 },
      { ageGroup: "45-54", gender: "female", score: 65 },
      { ageGroup: "55-64", gender: "female", score: 50 },
    ],
  },
  {
    name: "Fredrik Skavlan",
    image: "/images/fredrik-skavlan.jpg",
    position: "TV-programleder",
    description:
      "Fredrik Skavlan er en norsk-svensk programleder, kjent for talkshowet ‘Skavlan’ som sendes i flere land.",
    demographics: [
      { ageGroup: "18-24", gender: "male", score: 45 },
      { ageGroup: "25-34", gender: "male", score: 70 },
      { ageGroup: "35-44", gender: "female", score: 82 },
      { ageGroup: "45-54", gender: "male", score: 90 },
      { ageGroup: "55-64", gender: "female", score: 58 },
    ],
  },
  {
    name: "Synnøve Skarbø",
    image: "/images/synnove-skarbo.jpg",
    position: "TV-programleder",
    description:
      "Synnøve Skarbø er en norsk komiker og programleder, kjent fra både radio og TV.",
    demographics: [
      { ageGroup: "18-24", gender: "female", score: 78 },
      { ageGroup: "25-34", gender: "female", score: 82 },
      { ageGroup: "35-44", gender: "other", score: 35 },
      { ageGroup: "45-54", gender: "male", score: 50 },
      { ageGroup: "55-64", gender: "female", score: 30 },
    ],
  },
  {
    name: "Petter Nome",
    image: "/images/petter-nome.jpg",
    position: "TV-programleder",
    description:
      "Petter Nome er en norsk programleder og gründer, tidligere kjent fra underholdningsprogrammer på TV 2.",
    demographics: [
      { ageGroup: "18-24", gender: "male", score: 30 },
      { ageGroup: "25-34", gender: "female", score: 55 },
      { ageGroup: "35-44", gender: "male", score: 68 },
      { ageGroup: "45-54", gender: "female", score: 74 },
      { ageGroup: "55-64", gender: "male", score: 80 },
    ],
  },
  {
    name: "Line Elvsåshagen",
    image: "/images/line-elvsashagen.jpg",
    position: "TV-programleder",
    description:
      "Line Elvsåshagen er en norsk medieviter og programleder, kjent fra dokumentar- og kulturprogrammer.",
    demographics: [
      { ageGroup: "18-24", gender: "female", score: 50 },
      { ageGroup: "25-34", gender: "female", score: 62 },
      { ageGroup: "35-44", gender: "male", score: 48 },
      { ageGroup: "45-54", gender: "female", score: 70 },
      { ageGroup: "55-64", gender: "other", score: 28 },
    ],
  },
  {
    name: "Ivar Dyrhaug",
    image: "/images/ivar-dyrhaug.jpg",
    position: "TV-programleder",
    description:
      "Ivar Dyrhaug er en norsk journalist og programleder, spesielt innen dokumentar- og nyhetsjournalistikk.",
    demographics: [
      { ageGroup: "18-24", gender: "male", score: 25 },
      { ageGroup: "25-34", gender: "male", score: 45 },
      { ageGroup: "35-44", gender: "female", score: 60 },
      { ageGroup: "45-54", gender: "male", score: 68 },
      { ageGroup: "55-64", gender: "female", score: 55 },
    ],
  },
  {
    name: "Harald Eia",
    image: "/images/harald-eia.jpg",
    position: "TV-programleder",
    description:
      "Harald Eia er en norsk komiker, sosiolog og programleder, kjent fra satiriske og dokumentariske TV-serier.",
    demographics: [
      { ageGroup: "18-24", gender: "male", score: 55 },
      { ageGroup: "25-34", gender: "other", score: 40 },
      { ageGroup: "35-44", gender: "male", score: 85 },
      { ageGroup: "45-54", gender: "female", score: 60 },
      { ageGroup: "55-64", gender: "male", score: 70 },
    ],
  },
  {
    name: "Thomas Seltzer",
    image: "/images/thomas-seltzer.jpg",
    position: "TV-programleder",
    description:
      "Thomas Seltzer er en norsk programleder og musiker, best kjent fra dokumentarserien ‘Trygdekontoret’.",
    demographics: [
      { ageGroup: "18-24", gender: "male", score: 70 },
      { ageGroup: "25-34", gender: "male", score: 88 },
      { ageGroup: "35-44", gender: "female", score: 52 },
      { ageGroup: "45-54", gender: "male", score: 75 },
      { ageGroup: "55-64", gender: "female", score: 45 },
    ],
  },
  {
    name: "Hege Øversveen",
    image: "/images/hege-oversveen.jpg",
    position: "TV-programleder",
    description:
      "Hege Øversveen er en norsk radioprogramleder, særlig kjent fra NRK P1.",
    demographics: [
      { ageGroup: "18-24", gender: "female", score: 40 },
      { ageGroup: "25-34", gender: "female", score: 65 },
      { ageGroup: "35-44", gender: "male", score: 59 },
      { ageGroup: "45-54", gender: "female", score: 70 },
      { ageGroup: "55-64", gender: "other", score: 30 },
    ],
  },
  {
    name: "Live Nelvik",
    image: "/images/live-nelvik.jpg",
    position: "TV-programleder",
    description:
      "Live Nelvik er en norsk programleder og skuespiller, kjent fra ulike underholdningsprogrammer på TV og radio.",
    demographics: [
      { ageGroup: "18-24", gender: "female", score: 92 },
      { ageGroup: "25-34", gender: "female", score: 85 },
      { ageGroup: "35-44", gender: "male", score: 48 },
      { ageGroup: "45-54", gender: "female", score: 55 },
      { ageGroup: "55-64", gender: "other", score: 20 },
    ],
  },
  {
    name: "Kåre Magnus Bergh",
    image: "/images/kare-magnus-bergh.jpg",
    position: "TV-programleder",
    description:
      "Kåre Magnus Bergh er en norsk musikkjournalist og programleder, ofte forbundet med musikkonkurranser på TV.",
    demographics: [
      { ageGroup: "18-24", gender: "male", score: 58 },
      { ageGroup: "25-34", gender: "other", score: 50 },
      { ageGroup: "35-44", gender: "male", score: 70 },
      { ageGroup: "45-54", gender: "female", score: 65 },
      { ageGroup: "55-64", gender: "male", score: 45 },
    ],
  },
];
