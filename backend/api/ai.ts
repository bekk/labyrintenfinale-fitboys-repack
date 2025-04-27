import OpenAI from "openai";
import type { Demography } from "backend/dataset/demography";
import type { Host } from "backend/dataset/hosts";
import type { Participant } from "backend/dataset/participants";
import express, { type Request, type Response } from "express";
import type { Element } from "backend/dataset/elements";
import type { Location } from "backend/dataset/locations";
import "dotenv/config";

export interface ResultBody {
  text: string;
  image: string;
}

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

    if (!toProcess) {
      return res
        .status(400)
        .json({ error: "Missing required data in request body" });
    }

    const prompt = `Du er en ekspert innenfor tv og underholdning i Norge. Lag et nytt og spennende tv-show basert på følgende elementer:`;

    const sections = [];

    if (toProcess.demography) {
      sections.push(
        `Målgruppe: ${toProcess.demography.ageGroup} (Score: ${toProcess.demography.score})`
      );
    }

    if (toProcess.participant) {
      const score = findScoreForAgeGroup(
        toProcess.participant.demographics,
        toProcess.demography?.ageGroup
      );
      sections.push(
        `Deltagere: ${toProcess.participant.name} - ${toProcess.participant.description} (Score: ${score})`
      );
    }

    if (toProcess.element) {
      const score = findScoreForAgeGroup(
        toProcess.element.demographics,
        toProcess.demography?.ageGroup
      );
      sections.push(
        `Elementer: ${toProcess.element.name} - ${toProcess.element.description} (Score: ${score})`
      );
    }

    if (toProcess.location) {
      const score = findScoreForAgeGroup(
        toProcess.location.demographics,
        toProcess.demography?.ageGroup
      );
      sections.push(
        `Lokasjon: ${toProcess.location.name} - ${toProcess.location.description} (Score: ${score})`
      );
    }

    if (toProcess.host) {
      const score = findScoreForAgeGroup(
        toProcess.host.demographics,
        toProcess.demography?.ageGroup
      );
      sections.push(
        `Vert: ${toProcess.host.name} - ${toProcess.host.description} (Score: ${score})`
      );
    }

    const instructions = `
    Vær kreativ og ikke nødvendigvis bare begrens deg til de typiske trekkene ved disse valgene.
    Forslagene burde ta for seg typiske trekk ved målgruppen og eventuell samfunnsrelevans.
    Dersom konseptet likner på en eksisterende tv-serie, nevn dette og foreslå endringer eller en vri.
    Gi en samlet score basert på hvor godt elementene passer til målgruppen.
    Hvis målgruppen ikke passer til tv-showet, foreslå en annen målgruppe eller endringer.
    `;

    const fullPrompt = `${prompt}\n\n${sections.join(
      "\n\n"
    )}\n\n${instructions}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: fullPrompt }],
      max_tokens: 1000,
    });

    const text = completion.choices[0]?.message?.content || "";

    let imagePrompt =
      "Lag en logo eller promobilde for et norsk TV-program med følgende konsept: ";

    const conceptSummary = text.split(".")[0] + ".";
    imagePrompt +=
      conceptSummary.length <= 200
        ? conceptSummary
        : conceptSummary.substring(0, 200);

    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      n: 1,
      prompt: imagePrompt,
      size: "1024x1024",
    });

    const image = imageResponse.data?.[0]?.url || "";

    const response: ResultBody = {
      image: image,
      text: text,
    };

    return res.status(200).json({ response: response });
  } catch (error: any) {
    console.error("Error processing AI request:", error);

    if (error.status === 400) {
      return res.status(400).json({
        error: "Bad request to OpenAI API",
        details: error.error?.message || "Check your input parameters",
      });
    }

    if (error.status === 401) {
      return res.status(401).json({
        error: "Authentication error with OpenAI API",
        details: "Check your API key",
      });
    }

    return res.status(500).json({
      error: "Failed to process request",
      details: error.message || "Unknown error",
    });
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
