import type { Demography } from "./demography";

type Host = {
  name: string;
  image: string;
  description: string;
  demographics: Demography[];
};

const hosts: Host[] = [
  {
    name: "Mads Hansen",
    image: "/images/mads-hansen.jpg",
    description:
      "Mads Hansen er tidligere fotballspiller og nå TV-personlighet, kjent for sin humor og spissformuleringer.",
    demographics: [
      { ageGroup: "Barn", score: 30 },
      { ageGroup: "Tenåringer", score: 50 },
      { ageGroup: "Unge voksne", score: 90 },
      { ageGroup: "Studenter", score: 75 },
      { ageGroup: "Familier", score: 68 },
      { ageGroup: "Seniorer", score: 30 },
    ],
  },
  {
    name: "Sophie Elise",
    image: "/images/sophie-elise.jpg",
    description:
      "Sophie Elise er influenser, forfatter og programleder, kjent for sitt engasjement i sosiale temaer.",
    demographics: [
      { ageGroup: "Barn", score: 20 },
      { ageGroup: "Tenåringer", score: 40 },
      { ageGroup: "Unge voksne", score: 70 },
      { ageGroup: "Studenter", score: 88 },
      { ageGroup: "Familier", score: 55 },
      { ageGroup: "Seniorer", score: 20 },
    ],
  },
  {
    name: "Jon Almaas",
    image: "/images/jon-almaas.jpg",
    description:
      "Jon Almaas er en av Norges mest erfarne programledere, kjent for sin tørre humor og treffsikre replikk.",
    demographics: [
      { ageGroup: "Barn", score: 45 },
      { ageGroup: "Tenåringer", score: 60 },
      { ageGroup: "Unge voksne", score: 75 },
      { ageGroup: "Studenter", score: 68 },
      { ageGroup: "Familier", score: 82 },
      { ageGroup: "Seniorer", score: 70 },
    ],
  },
  {
    name: "Herman Flesvig",
    image: "/images/herman-flesvig.jpg",
    description:
      "Herman Flesvig er skuespiller og komiker, kjent for sine humoristiske roller i norsk TV og podkast.",
    demographics: [
      { ageGroup: "Barn", score: 35 },
      { ageGroup: "Tenåringer", score: 50 },
      { ageGroup: "Unge voksne", score: 95 },
      { ageGroup: "Studenter", score: 80 },
      { ageGroup: "Familier", score: 72 },
      { ageGroup: "Seniorer", score: 35 },
    ],
  },
  {
    name: "Solveig Kloppen",
    image: "/images/solveig-kloppen.jpg",
    description:
      "Solveig Kloppen er en erfaren norsk programleder kjent for sin varme, humor og dyktighet i intervjuer.",
    demographics: [
      { ageGroup: "Barn", score: 40 },
      { ageGroup: "Tenåringer", score: 55 },
      { ageGroup: "Unge voksne", score: 60 },
      { ageGroup: "Studenter", score: 78 },
      { ageGroup: "Familier", score: 75 },
      { ageGroup: "Seniorer", score: 65 },
    ],
  },
  {
    name: "Tix",
    image: "/images/tix.jpg",
    description:
      "Tix er artist og låtskriver, kjent for å være fargerik, inkluderende og en folkefavoritt blant yngre seere.",
    demographics: [
      { ageGroup: "Barn", score: 25 },
      { ageGroup: "Tenåringer", score: 40 },
      { ageGroup: "Unge voksne", score: 93 },
      { ageGroup: "Studenter", score: 85 },
      { ageGroup: "Familier", score: 60 },
      { ageGroup: "Seniorer", score: 25 },
    ],
  },
  {
    name: "Maria Stavang",
    image: "/images/maria-stavang.jpg",
    description:
      "Maria Stavang, også kjent som Piateed, er en komiker og skuespiller som kombinerer humor og sjarme på scenen.",
    demographics: [
      { ageGroup: "Barn", score: 40 },
      { ageGroup: "Tenåringer", score: 55 },
      { ageGroup: "Unge voksne", score: 88 },
      { ageGroup: "Studenter", score: 80 },
      { ageGroup: "Familier", score: 65 },
      { ageGroup: "Seniorer", score: 40 },
    ],
  },
  {
    name: "Erlend Elias",
    image: "/images/erlend-elias.jpg",
    description:
      "Erlend Elias er stylist, influenser og TV-profil med en karismatisk og fargerik stil.",
    demographics: [
      { ageGroup: "Barn", score: 30 },
      { ageGroup: "Tenåringer", score: 48 },
      { ageGroup: "Unge voksne", score: 72 },
      { ageGroup: "Studenter", score: 77 },
      { ageGroup: "Familier", score: 60 },
      { ageGroup: "Seniorer", score: 30 },
    ],
  },
  {
    name: "Kristoffer Schau",
    image: "/images/kristoffer-schau.jpg",
    description:
      "Kristoffer Schau er musiker, forfatter og programleder, kjent for sin mørke humor og kreative prosjekter.",
    demographics: [
      { ageGroup: "Barn", score: 30 },
      { ageGroup: "Tenåringer", score: 55 },
      { ageGroup: "Unge voksne", score: 68 },
      { ageGroup: "Studenter", score: 60 },
      { ageGroup: "Familier", score: 78 },
      { ageGroup: "Seniorer", score: 55 },
    ],
  },
  {
    name: "Astrid S",
    image: "/images/astrid-s.jpg",
    description:
      "Astrid S er en internasjonalt kjent popartist med sterk appell til unge målgrupper.",
    demographics: [
      { ageGroup: "Barn", score: 20 },
      { ageGroup: "Tenåringer", score: 45 },
      { ageGroup: "Unge voksne", score: 85 },
      { ageGroup: "Studenter", score: 90 },
      { ageGroup: "Familier", score: 60 },
      { ageGroup: "Seniorer", score: 20 },
    ],
  },
];
