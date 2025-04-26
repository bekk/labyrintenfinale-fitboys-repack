import type { Demography } from "./demography";

type Element = {
  name: string;
  image: string;
  description: string;
  demographics: Demography[];
};

const elements: Element[] = [
  {
    name: "Utstemming",
    image: "/images/utstemming.jpg",
    description:
      "Deltakerne må stemme hverandre ut i løpet av konkurransen, basert på prestasjon, strategi eller popularitet.",
    demographics: [
      { ageGroup: "Barn", score: 30 },
      { ageGroup: "Tenåringer", score: 85 },
      { ageGroup: "Unge voksne", score: 88 },
      { ageGroup: "Studenter", score: 92 },
      { ageGroup: "Familier", score: 65 },
      { ageGroup: "Seniorer", score: 40 },
    ],
  },
  {
    name: "Live publikum",
    image: "/images/live-publikum.jpg",
    description:
      "Programmet spilles inn foran et levende publikum som kan reagere direkte med jubel, buing og applaus.",
    demographics: [
      { ageGroup: "Barn", score: 50 },
      { ageGroup: "Tenåringer", score: 75 },
      { ageGroup: "Unge voksne", score: 80 },
      { ageGroup: "Studenter", score: 85 },
      { ageGroup: "Familier", score: 70 },
      { ageGroup: "Seniorer", score: 55 },
    ],
  },
  {
    name: "Direkte sending",
    image: "/images/direkte-sending.jpg",
    description:
      "Programmet sendes live uten mulighet for klipping – alt kan skje, noe som gir spenning og uforutsigbarhet.",
    demographics: [
      { ageGroup: "Barn", score: 40 },
      { ageGroup: "Tenåringer", score: 80 },
      { ageGroup: "Unge voksne", score: 88 },
      { ageGroup: "Studenter", score: 90 },
      { ageGroup: "Familier", score: 75 },
      { ageGroup: "Seniorer", score: 50 },
    ],
  },
  {
    name: "Hemmelig lag",
    image: "/images/hemmelig-lag.jpg",
    description:
      "Deltakerne deles i skjulte lag, som først avsløres midt i konkurransen for å skape drama og overraskelser.",
    demographics: [
      { ageGroup: "Barn", score: 35 },
      { ageGroup: "Tenåringer", score: 80 },
      { ageGroup: "Unge voksne", score: 90 },
      { ageGroup: "Studenter", score: 85 },
      { ageGroup: "Familier", score: 65 },
      { ageGroup: "Seniorer", score: 40 },
    ],
  },
  {
    name: "Seerstyrt avgjørelse",
    image: "/images/seerstyrt.jpg",
    description:
      "Publikum får mulighet til å stemme i sanntid på hva som skal skje videre i programmet.",
    demographics: [
      { ageGroup: "Barn", score: 20 },
      { ageGroup: "Tenåringer", score: 90 },
      { ageGroup: "Unge voksne", score: 95 },
      { ageGroup: "Studenter", score: 90 },
      { ageGroup: "Familier", score: 70 },
      { ageGroup: "Seniorer", score: 45 },
    ],
  },
  {
    name: "Mystery box utfordringer",
    image: "/images/mystery-box.jpg",
    description:
      "Deltakerne får ukjente utfordringer de må løse på kreativt vis under tidspress.",
    demographics: [
      { ageGroup: "Barn", score: 45 },
      { ageGroup: "Tenåringer", score: 82 },
      { ageGroup: "Unge voksne", score: 87 },
      { ageGroup: "Studenter", score: 80 },
      { ageGroup: "Familier", score: 78 },
      { ageGroup: "Seniorer", score: 50 },
    ],
  },
  {
    name: "Parutfordringer",
    image: "/images/parutfordringer.jpg",
    description:
      "Deltakerne må jobbe i par – enten med nære venner eller tilfeldige motspillere – for å løse oppgaver.",
    demographics: [
      { ageGroup: "Barn", score: 40 },
      { ageGroup: "Tenåringer", score: 75 },
      { ageGroup: "Unge voksne", score: 78 },
      { ageGroup: "Studenter", score: 83 },
      { ageGroup: "Familier", score: 68 },
      { ageGroup: "Seniorer", score: 42 },
    ],
  },
  {
    name: "Overlevelse i naturen",
    image: "/images/overlevelse-natur.jpg",
    description:
      "Deltakerne må klare seg uten moderne hjelpemidler i villmarken og konkurrere om å overleve lengst.",
    demographics: [
      { ageGroup: "Barn", score: 50 },
      { ageGroup: "Tenåringer", score: 70 },
      { ageGroup: "Unge voksne", score: 92 },
      { ageGroup: "Studenter", score: 75 },
      { ageGroup: "Familier", score: 85 },
      { ageGroup: "Seniorer", score: 55 },
    ],
  },
  {
    name: "Hemmelig dommerpanel",
    image: "/images/hemmelig-dommer.jpg",
    description:
      "Et skjult dommerpanel gir vurderinger uten at deltakerne vet hvem som dømmer dem.",
    demographics: [
      { ageGroup: "Barn", score: 30 },
      { ageGroup: "Tenåringer", score: 60 },
      { ageGroup: "Unge voksne", score: 82 },
      { ageGroup: "Studenter", score: 70 },
      { ageGroup: "Familier", score: 75 },
      { ageGroup: "Seniorer", score: 45 },
    ],
  },
  {
    name: "Konkurranser om ukesoppdrag",
    image: "/images/ukesoppdrag.jpg",
    description:
      "Deltakerne konkurrerer om å vinne ukesoppdrag som gir dem fordeler eller ulemper i neste runde.",
    demographics: [
      { ageGroup: "Barn", score: 45 },
      { ageGroup: "Tenåringer", score: 78 },
      { ageGroup: "Unge voksne", score: 85 },
      { ageGroup: "Studenter", score: 78 },
      { ageGroup: "Familier", score: 72 },
      { ageGroup: "Seniorer", score: 48 },
    ],
  },
];
