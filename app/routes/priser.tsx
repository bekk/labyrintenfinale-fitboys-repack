import { ChevronRight, Check, X } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function PricingPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center  mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600">
            Prisplaner for TV-produsenter
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Velg den perfekte AI-løsningen for dine produksjoner
          </p>

          <Tabs defaultValue="monthly" className="w-full mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Månedlig</TabsTrigger>
              <TabsTrigger value="yearly">
                Årlig{" "}
                <span className="ml-1.5 rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800">
                  Spar 20%
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="monthly" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                {renderPricingCards(false)}
              </div>
            </TabsContent>

            <TabsContent value="yearly" className="mt-8">
              <div className="grid gap-8 md:grid-cols-3">
                {renderPricingCards(true)}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <section className=" mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ofte stilte spørsmål
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white shadow-sm border border-gray-100"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Klar til å transformere dine TV-produksjoner?
            </h2>
            <p className="text-teal-50 mb-8">
              Kontakt oss i dag for en gratis konsultasjon og se hvordan Reniew
              kan løfte dine prosjekter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white cursor-pointer text-teal-600 hover:bg-teal-50">
                Bestill demo
              </Button>
              <Button
                variant="outline"
                className="text-white border-white bg-emerald-700 cursor-pointer hover:bg-teal-600"
              >
                Kontakt salg
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const renderPricingCards = (isYearly: boolean) => {
  const plans = [
    {
      name: "Starter",
      description: "Perfekt for mindre produksjoner og nybegynnere",
      price: isYearly ? 990 : 1190,
      features: [
        "AI-basert innholdsanalyse",
        "Grunnleggende seertallsprediksjon",
        "5 prosjekter per måned",
        "Standard support",
      ],
      notIncluded: [
        "Automatisk redigering",
        "Avansert publikumsanalyse",
        "Prioritert support",
      ],
      cta: "Kom i gang",
      popular: false,
    },
    {
      name: "Profesjonell",
      description: "Ideell for etablerte produksjonsselskaper",
      price: isYearly ? 2390 : 2990,
      features: [
        "Alt i Starter",
        "Automatisk redigering",
        "Avansert publikumsanalyse",
        "20 prosjekter per måned",
        "Prioritert support",
      ],
      notIncluded: ["Ubegrenset prosjekter", "Dedikert kontaktperson"],
      cta: "Velg Profesjonell",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Skreddersydd for store TV-nettverk",
      price: isYearly ? 4990 : 5990,
      features: [
        "Alt i Profesjonell",
        "Ubegrenset prosjekter",
        "Dedikert kontaktperson",
        "Tilpassede AI-modeller",
        "Premium support 24/7",
      ],
      notIncluded: [],
      cta: "Kontakt salg",
      popular: false,
    },
  ];

  return plans.map((plan, index) => (
    <Card
      key={index}
      className={`relative overflow-hidden ${
        plan.popular ? "border-teal-500 shadow-lg" : "border-gray-200"
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Mest populær
          </div>
        </div>
      )}
      <CardHeader className={`pb-8 ${plan.popular ? "bg-teal-50" : ""}`}>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-gray-500 ml-2">NOK/mnd</span>
          {isYearly && (
            <p className="text-sm text-teal-600 mt-1">Faktureres årlig</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
          {plan.notIncluded.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-400">
              <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            plan.popular ? "bg-teal-500 hover:bg-teal-600" : ""
          }`}
          variant={plan.popular ? "default" : "outline"}
        >
          {plan.cta}
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  ));
};

const faqs = [
  {
    question: "Hvordan kan AI forbedre TV-produksjonen vår?",
    answer:
      "Reniew's AI-løsninger kan automatisere redigeringsprosesser, analysere seerdata for bedre beslutninger, og generere innholdsforslag basert på trender og preferanser.",
  },
  {
    question: "Kan jeg bytte mellom abonnementer?",
    answer:
      "Ja, du kan oppgradere eller nedgradere abonnementet ditt når som helst. Endringer trer i kraft ved neste fakturaperiode.",
  },
  {
    question: "Hvor lang er bindingstiden?",
    answer:
      "Vi har ingen bindingstid på våre abonnementer. Du kan kansellere når som helst, og abonnementet vil være aktivt ut gjeldende fakturaperiode.",
  },
  {
    question: "Tilbyr dere opplæring for teamet vårt?",
    answer:
      "Ja, alle abonnementer inkluderer tilgang til vårt opplæringsbibliotek. Profesjonell og Enterprise-planene inkluderer også personlig opplæring.",
  },
  {
    question: "Hvordan fungerer prosjektbegrensningene?",
    answer:
      "Et prosjekt defineres som en enkelt TV-produksjon eller episode. Du kan bruke alle våre verktøy på hvert prosjekt innenfor din månedlige kvote.",
  },
  {
    question: "Er dataene våre sikre hos Reniew?",
    answer:
      "Absolutt. Vi bruker bransjeledende kryptering og sikkerhetsprotokoller for å beskytte alle dine data og innhold. Vi deler aldri dine data med tredjeparter.",
  },
];
