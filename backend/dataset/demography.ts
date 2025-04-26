export type Demography = {
  id?: number;
  ageGroup: string;
  marketShare?: number;
  score: number;
};

export const demographics: Demography[] = [
  {
    id: 1,
    ageGroup: "Barn",
    marketShare: 0.1,
    score: 45,
  },
  {
    id: 2,
    ageGroup: "Tenåringer",
    marketShare: 0.15,
    score: 60,
  },
  {
    id: 3,
    ageGroup: "Unge voksne",
    marketShare: 0.25,
    score: 75,
  },
  {
    id: 4,
    ageGroup: "Studenter",
    marketShare: 0.05,
    score: 80,
  },
  {
    id: 5,
    ageGroup: "Familier",
    marketShare: 0.30,
    score: 70,
  },
  {
    id: 6,
    ageGroup: "Seniorer",
    marketShare: 0.15,
    score: 50,
  },
];
