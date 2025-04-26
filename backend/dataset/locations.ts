import type { Demography } from "./demography";

export type Location = {
  name: string;
  image: string;
  description: string;
  demographics: Demography[];
};

export const locations: Location[] = [
  {
    name: "Ute i villmarken",
    image: "/images/villmarken.jpg",
    description:
      "Langt fra sivilisasjonen, midt i skoger, fjell og elver — perfekt for tøffe konkurranser.",
    demographics: [
      { ageGroup: "Barn", score: 28 },
      { ageGroup: "Tenåringer", score: 45 },
      { ageGroup: "Unge voksne", score: 88 },
      { ageGroup: "Studenter", score: 60 },
      { ageGroup: "Familier", score: 75 },
      { ageGroup: "Seniorer", score: 45 },
    ],
  },
  {
    name: "I en luksusvilla",
    image: "/images/luksusvilla.jpg",
    description:
      "En overdådig villa med basseng og luksus, perfekt for realityshow om kjærlighet og intriger.",
    demographics: [
      { ageGroup: "Barn", score: 25 },
      { ageGroup: "Tenåringer", score: 43 },
      { ageGroup: "Unge voksne", score: 78 },
      { ageGroup: "Studenter", score: 92 },
      { ageGroup: "Familier", score: 58 },
      { ageGroup: "Seniorer", score: 25 },
    ],
  },
  {
    name: "På en øde øy",
    image: "/images/odeoy.jpg",
    description:
      "En isolert øy langt fra folk — overlevelse, samarbeid og eventyr.",
    demographics: [
      { ageGroup: "Barn", score: 32 },
      { ageGroup: "Tenåringer", score: 50 },
      { ageGroup: "Unge voksne", score: 94 },
      { ageGroup: "Studenter", score: 67 },
      { ageGroup: "Familier", score: 81 },
      { ageGroup: "Seniorer", score: 32 },
    ],
  },
  {
    name: "På en gård",
    image: "/images/gard.jpg",
    description: "Landlig idyll med dyr, jordbruk og gammeldags livsstil.",
    demographics: [
      { ageGroup: "Barn", score: 48 },
      { ageGroup: "Tenåringer", score: 65 },
      { ageGroup: "Unge voksne", score: 62 },
      { ageGroup: "Studenter", score: 73 },
      { ageGroup: "Familier", score: 79 },
      { ageGroup: "Seniorer", score: 48 },
    ],
  },
  {
    name: "I storbyen",
    image: "/images/storbyen.jpg",
    description:
      "Travle gater, skyskrapere og storbyliv — perfekt for konkurranser i urban jungel.",
    demographics: [
      { ageGroup: "Barn", score: 33 },
      { ageGroup: "Tenåringer", score: 58 },
      { ageGroup: "Unge voksne", score: 84 },
      { ageGroup: "Studenter", score: 77 },
      { ageGroup: "Familier", score: 70 },
      { ageGroup: "Seniorer", score: 33 },
    ],
  },
  {
    name: "I en spøkelsesby",
    image: "/images/spokelsesby.jpg",
    description: "Forlatt, mørkt og mystisk. Perfekt for skrekkprogrammer.",
    demographics: [
      { ageGroup: "Barn", score: 18 },
      { ageGroup: "Tenåringer", score: 42 },
      { ageGroup: "Unge voksne", score: 90 },
      { ageGroup: "Studenter", score: 70 },
      { ageGroup: "Familier", score: 65 },
      { ageGroup: "Seniorer", score: 18 },
    ],
  },
  {
    name: "I en futuristisk by",
    image: "/images/futuristiskby.jpg",
    description:
      "Høyteknologi, smarte bygg, droner og roboter — fremtidens TV-programmer.",
    demographics: [
      { ageGroup: "Barn", score: 29 },
      { ageGroup: "Tenåringer", score: 48 },
      { ageGroup: "Unge voksne", score: 87 },
      { ageGroup: "Studenter", score: 75 },
      { ageGroup: "Familier", score: 73 },
      { ageGroup: "Seniorer", score: 29 },
    ],
  },
  {
    name: "På en romstasjon",
    image: "/images/romstasjon.jpg",
    description:
      "Simulert null-gravitasjon og ekstreme utfordringer i verdensrommet.",
    demographics: [
      { ageGroup: "Barn", score: 40 },
      { ageGroup: "Tenåringer", score: 55 },
      { ageGroup: "Unge voksne", score: 91 },
      { ageGroup: "Studenter", score: 66 },
      { ageGroup: "Familier", score: 74 },
      { ageGroup: "Seniorer", score: 40 },
    ],
  },
  {
    name: "På en gigantisk fornøyelsespark",
    image: "/images/fornoyelsespark.jpg",
    description:
      "Adrenalin, fart og kaos — perfekt for energiske konkurranser.",
    demographics: [
      { ageGroup: "Barn", score: 45 },
      { ageGroup: "Tenåringer", score: 60 },
      { ageGroup: "Unge voksne", score: 95 },
      { ageGroup: "Studenter", score: 80 },
      { ageGroup: "Familier", score: 82 },
      { ageGroup: "Seniorer", score: 45 },
    ],
  },
  {
    name: "I en ødelagt industriby",
    image: "/images/industri.jpg",
    description:
      "Forlatt fabrikklandskap, rust og betong — for tøffe utfordringer og overlevelsestema.",
    demographics: [
      { ageGroup: "Barn", score: 22 },
      { ageGroup: "Tenåringer", score: 38 },
      { ageGroup: "Unge voksne", score: 72 },
      { ageGroup: "Studenter", score: 54 },
      { ageGroup: "Familier", score: 65 },
      { ageGroup: "Seniorer", score: 22 },
    ],
  },
];
