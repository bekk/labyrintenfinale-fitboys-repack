import OpenAI from "openai";
import type { Demography } from "backend/dataset/demography";
import type { Host } from "backend/dataset/hosts";
import type { Participant } from "backend/dataset/participants";
import express, { type Request, type Response } from "express";
import type { Element } from "backend/dataset/elements";
import type { Location } from "backend/dataset/locations";
import "dotenv/config";

interface AiRequestBody {
  toProcess: {
    demography?: Demography;
    element?: Element;
    location?: Location;
    host?: Host;
    participant?: Participant;
  };
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const aiRoute = express.Router();

aiRoute.post("/ai", async (req: Request, res: Response) => {
  try {
    const { toProcess }: AiRequestBody = req.body;

    const prompt = `Du er en ekspert innenfor tv og underholdning i Norge. Ved å bruke dataen til slutt i denne meldingen skal du slå sammen deltagere, elementer, lokasjon og en vert til å lage et nytt og spennende tv-show. Vær kreativ og ikke nødvendigvis bare begrens deg til de typiske trekkene ved disse valgene. Forslagene burde ta for seg typiske trekk ved målgruppen, eventuelt men ikke nødvendig også samfunnsrelevans. Dersom en tv-serie som har blitt lagd før likner på denne kombinasjonen, skal du skrive dette, og si hvilken tv serie den likner på. Da skal du også komme med forslag til endringer, eller en vri på dette tidligere showet. Du skal også bruke "score" som de forskjellige valgene har ovenfor målgruppen jeg gir deg for å gi en kombinert score. Hvis målgruppen som er oppgitt ikke passer til tv-showet, kan du skrive dette og komme med et forslag til annen målgruppe, eller endringer av valg som kan gjøre det mer egnet. Du får det i rekkefølgen: Målgruppe, Deltagere, Elementer, Lokasjon og Vert.`;

    const promptData = `
    
    Målgruppe: ${toProcess.demography?.ageGroup} (Score: ${
      toProcess.demography?.score
    })
    Deltagere: ${toProcess.participant?.name} - ${
      toProcess.participant?.description
    } (Score for målgruppen: ${findScoreForAgeGroup(
      toProcess.participant?.demographics,
      toProcess.demography?.ageGroup
    )})
    Elementer: ${toProcess.element?.name} - ${
      toProcess.element?.description
    } (Score for målgruppen: ${findScoreForAgeGroup(
      toProcess.element?.demographics,
      toProcess.demography?.ageGroup
    )})
    Lokasjon: ${toProcess.location?.name} - ${
      toProcess.location?.description
    } (Score for målgruppen: ${findScoreForAgeGroup(
      toProcess.location?.demographics,
      toProcess.demography?.ageGroup
    )})
    Vert: ${toProcess.host?.name} - ${
      toProcess.host?.description
    } (Score for målgruppen: ${findScoreForAgeGroup(
      toProcess.host?.demographics,
      toProcess.demography?.ageGroup
    )})
    `;

    const fullPrompt = `${prompt}\n\n${promptData}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: fullPrompt }],
    });

    const text = completion.choices[0]?.message?.content || "";

    return res.status(200).json({ response: text });
  } catch (error) {
    console.error("Error processing AI request:", error);
    return res.status(500).json({ error: "Failed to process request" });
  }
});

function findScoreForAgeGroup(
  demographics?: Demography[],
  ageGroup?: string
): number {
  if (!demographics || !ageGroup) {
    return 0;
  }
  const demographic = demographics.find((d) => d.ageGroup === ageGroup);
  return demographic ? demographic.score : 0;
}

export default aiRoute;
