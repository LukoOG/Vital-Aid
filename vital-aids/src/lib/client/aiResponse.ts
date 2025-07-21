// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv"
// import { Message } from "../types";

// dotenv.config()

// const api_key= "AIzaSyCD2xv_p09djCQcTXa1RFH_GvvEKqleQms"
// const genAI = new GoogleGenerativeAI(api_key)
// const GEMINI_MODEL = "gemini-1.5-flash";

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// export async function AiChatResponse(
//     history: Message[],
//     prompt: string,
//     systemPrompt:string
// ){
//     const model = genAI.getGenerativeModel({
//         model: GEMINI_MODEL,
//         systemInstruction: systemPrompt,
//         generationConfig,
//     });
//     const chatSession = model.startChat({ history: history });
//     const result = await chatSession.sendMessage(prompt);
//     const text = result.response.text();
//     // console.log(text);
//     return text;
// }

// export async function AiUssdResponse(
//     history: Message[],
//     prompt: string,
//     systemPrompt:string
// ){
//     const model = genAI.getGenerativeModel({
//         model: GEMINI_MODEL,
//         systemInstruction: systemPrompt,
//         generationConfig,
//     });
//     const chatSession = model.startChat({ history: history });
//     const result = await chatSession.sendMessage(prompt);
//     const text = result.response.text();
//     // console.log(text);
//     return text;
// }

// export async function AiAidResponse(prompt:string, systemPrompt:string){
//     const model = genAI.getGenerativeModel({
//         model: GEMINI_MODEL,
//         systemInstruction: systemPrompt,
//         generationConfig,
// });

// const result = await model.generateContent(prompt);
// const text = result.response.text();

// console.log(text);
// return text;
// }

// export async function AiBodyResponse(prompt:string, sysprompt:string){
//     const model = genAI.getGenerativeModel({
//         model: GEMINI_MODEL,
//         systemInstruction: sysprompt,
//         generationConfig,
// });

// const result = await model.generateContent(prompt);
// const text = result.response.text();

// // console.log(text);
// return text;
// }
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { Message } from "../types";

dotenv.config();

const api_key = "AIzaSyCD2xv_p09djCQcTXa1RFH_GvvEKqleQms";

if (!api_key) {
    throw new Error("API key is missing. Please provide a valid API key.");
}

const genAI = new GoogleGenerativeAI(api_key);
const GEMINI_MODEL = "gemini-1.5-flash";

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function retryRequest<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
    try {
        return await fn();
    } catch (err: any) {
        if (retries > 0 && err.message.includes('503')) {
            console.warn(`Retrying after 503 error. Attempts left: ${retries}`);
            await new Promise(res => setTimeout(res, delay));
            return retryRequest(fn, retries - 1, delay * 2);
        }
        throw err;
    }
}

export async function AiChatResponse(
    history: Message[],
    prompt: string,
    systemPrompt: string
) {
    const model = genAI.getGenerativeModel({
        model: GEMINI_MODEL,
        systemInstruction: systemPrompt,
        generationConfig,
    });

    const chatSession = model.startChat({ history });
    const result = await retryRequest(() => chatSession.sendMessage(prompt));
    const text = result.response.text();
    return text;
}

export async function AiUssdResponse(
    history: Message[],
    prompt: string,
    systemPrompt: string
) {
    const model = genAI.getGenerativeModel({
        model: GEMINI_MODEL,
        systemInstruction: systemPrompt,
        generationConfig,
    });

    const chatSession = model.startChat({ history });
    const result = await retryRequest(() => chatSession.sendMessage(prompt));
    const text = result.response.text();
    return text;
}

export async function AiAidResponse(prompt: string, systemPrompt: string) {
    const model = genAI.getGenerativeModel({
        model: GEMINI_MODEL,
        systemInstruction: systemPrompt,
        generationConfig,
    });

    const result = await retryRequest(() => model.generateContent(prompt));
    const text = result.response.text();
    console.log(text);
    return text;
}

export async function AiBodyResponse(prompt: string, sysprompt: string) {
    const model = genAI.getGenerativeModel({
        model: GEMINI_MODEL,
        systemInstruction: sysprompt,
        generationConfig,
    });

    const result = await retryRequest(() => model.generateContent(prompt));
    const text = result.response.text();
    return text;
}
