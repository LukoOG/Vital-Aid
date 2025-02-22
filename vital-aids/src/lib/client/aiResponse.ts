import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"
import { Message } from "../types";

dotenv.config()

let api_key: string = process.env.API_KEY || ""
const genAI = new GoogleGenerativeAI(api_key)
const GEMINI_MODEL = "gemini-1.5-flash";

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function AiChatResponse(
    history: Message[],
    prompt: string,
    systemPrompt:string
){
    const model = genAI.getGenerativeModel({
        model: GEMINI_MODEL,
        systemInstruction: systemPrompt,
        generationConfig,
    });
    const chatSession = model.startChat({ history: history });
    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();
    // console.log(text);
    return text;
}

export async function AiUssdResponse(
    history: Message[],
    prompt: string,
    systemPrompt:string
){
    const model = genAI.getGenerativeModel({
        model: GEMINI_MODEL,
        systemInstruction: systemPrompt,
        generationConfig,
    });
    const chatSession = model.startChat({ history: history });
    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();
    // console.log(text);
    return text;
}

export async function AiAidResponse(prompt:string, systemPrompt:string){
    const model = genAI.getGenerativeModel({
        model: GEMINI_MODEL,
        systemInstruction: systemPrompt,
        generationConfig,
});

const result = await model.generateContent(prompt);
const text = result.response.text();

console.log(text);
return text;
}