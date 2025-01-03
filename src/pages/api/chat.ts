// filepath: /c:/Users/a390310/Documents/2_Develop/knowledge-hub-sst/src/pages/api/chat.ts
import type { APIRoute } from "astro";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";
import siteDocumentation from "@/lib/llms";
import dotenv from "dotenv";

dotenv.config();

export const prerender = false;

const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const POST: APIRoute = async ({ request }) => {
    const { messages } = await request.json();

    const result = await streamText({
        model: openai("gpt-4o"),
        system: siteDocumentation(),
        temperature: 0.5,
        messages: convertToCoreMessages(messages),
    });

    return result.toDataStreamResponse();
};