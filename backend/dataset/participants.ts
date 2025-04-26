import type { Demography } from "./demography";

export type Participant = {
  name: string;
  image: string;
  description: string;
  demographics: Demography[];
};

export const participants: Participant[] = [
  {
    name: "Idrettsutøvere",
    image: "/images/idrettsutovere.jpg",
    description:
      "En gruppe bestående av profesjonelle og amatøridrettsutøvere, klare for fysiske utfordringer.",
    demographics: [
      { ageGroup: "Barn", score: 45 },
      { ageGroup: "Tenåringer", score: 60 },
      { ageGroup: "Unge voksne", score: 92 },
      { ageGroup: "Studenter", score: 85 },
      { ageGroup: "Familier", score: 80 },
      { ageGroup: "Seniorer", score: 45 },
    ],
  },
  {
    name: "Ungdommer",
    image: "/images/ungdommer.jpg",
    description:
      "Engasjerte tenåringer og unge voksne, klare for fart, moro og uforutsigbare øyeblikk.",
    demographics: [
      { ageGroup: "Barn", score: 25 },
      { ageGroup: "Tenåringer", score: 40 },
      { ageGroup: "Unge voksne", score: 95 },
      { ageGroup: "Studenter", score: 78 },
      { ageGroup: "Familier", score: 60 },
      { ageGroup: "Seniorer", score: 25 },
    ],
  },
  {
    name: "Kjendiser",
    image: "/images/kjendiser.jpg",
    description:
      "En samling kjente ansikter fra musikk, TV, idrett og sosiale medier.",
    demographics: [
      { ageGroup: "Barn", score: 60 },
      { ageGroup: "Tenåringer", score: 70 },
      { ageGroup: "Unge voksne", score: 85 },
      { ageGroup: "Studenter", score: 90 },
      { ageGroup: "Familier", score: 75 },
      { ageGroup: "Seniorer", score: 60 },
    ],
  },
  {
    name: "Gamere",
    image: "/images/gamere.jpg",
    description:
      "Profesjonelle og hobbygamere som tar konkurranseinstinktet sitt med inn i virkeligheten.",
    demographics: [
      { ageGroup: "Barn", score: 20 },
      { ageGroup: "Tenåringer", score: 35 },
      { ageGroup: "Unge voksne", score: 90 },
      { ageGroup: "Studenter", score: 72 },
      { ageGroup: "Familier", score: 58 },
      { ageGroup: "Seniorer", score: 20 },
    ],
  },
  {
    name: "Influensere",
    image: "/images/influensere.jpg",
    description:
      "Folk som lever av sosiale medier og å bygge sitt eget personlige merkevare.",
    demographics: [
      { ageGroup: "Barn", score: 25 },
      { ageGroup: "Tenåringer", score: 40 },
      { ageGroup: "Unge voksne", score: 80 },
      { ageGroup: "Studenter", score: 88 },
      { ageGroup: "Familier", score: 55 },
      { ageGroup: "Seniorer", score: 25 },
    ],
  },
  {
    name: "Kreative kunstnere",
    image: "/images/kunstnere.jpg",
    description:
      "En gruppe billedkunstnere, skuespillere og musikere som bruker sin kreativitet i alle utfordringer.",
    demographics: [
      { ageGroup: "Barn", score: 55 },
      { ageGroup: "Tenåringer", score: 68 },
      { ageGroup: "Unge voksne", score: 75 },
      { ageGroup: "Studenter", score: 82 },
      { ageGroup: "Familier", score: 77 },
      { ageGroup: "Seniorer", score: 55 },
    ],
  },
  {
    name: "Familiefedre og -mødre",
    image: "/images/familieforeldre.jpg",
    description:
      "En sammensatt gruppe foreldre som kombinerer livserfaring med konkurranseinstinkt.",
    demographics: [
      { ageGroup: "Barn", score: 70 },
      { ageGroup: "Tenåringer", score: 80 },
      { ageGroup: "Unge voksne", score: 45 },
      { ageGroup: "Studenter", score: 65 },
      { ageGroup: "Familier", score: 85 },
      { ageGroup: "Seniorer", score: 70 },
    ],
  },
  {
    name: "Eventyrere",
    image: "/images/eventyrere.jpg",
    description:
      "Personer som elsker å presse grenser, utforske naturen og møte ekstreme utfordringer.",
    demographics: [
      { ageGroup: "Barn", score: 60 },
      { ageGroup: "Tenåringer", score: 70 },
      { ageGroup: "Unge voksne", score: 95 },
      { ageGroup: "Studenter", score: 80 },
      { ageGroup: "Familier", score: 78 },
      { ageGroup: "Seniorer", score: 60 },
    ],
  },
  {
    name: "Kokker og matentusiaster",
    image: "/images/kokker.jpg",
    description:
      "Matglade profesjonelle og amatører som kan takle både fysiske og kulinariske utfordringer.",
    demographics: [
      { ageGroup: "Barn", score: 65 },
      { ageGroup: "Tenåringer", score: 75 },
      { ageGroup: "Unge voksne", score: 65 },
      { ageGroup: "Studenter", score: 85 },
      { ageGroup: "Familier", score: 72 },
      { ageGroup: "Seniorer", score: 65 },
    ],
  },
  {
    name: "Nerdene",
    image: "/images/nerder.jpg",
    description:
      "Teknologisk kyndige, logisk sterke og overraskende kreative under press.",
    demographics: [
      { ageGroup: "Barn", score: 30 },
      { ageGroup: "Tenåringer", score: 50 },
      { ageGroup: "Unge voksne", score: 82 },
      { ageGroup: "Studenter", score: 70 },
      { ageGroup: "Familier", score: 68 },
      { ageGroup: "Seniorer", score: 30 },
    ],
  },
];
