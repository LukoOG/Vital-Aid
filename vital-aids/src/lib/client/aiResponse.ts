import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config()

let api_key: string = process.env.API_KEY || ""
const genAI = new GoogleGenerativeAI(api_key)

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

