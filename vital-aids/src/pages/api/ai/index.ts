import { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config()

let api_key: string = process.env.API_KEY || ""
const genAI = new GoogleGenerativeAI(api_key)


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
){
  if(req.method=='GET'){
    return res.status(200).json({"status":"good"})
  }
}