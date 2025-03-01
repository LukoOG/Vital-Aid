import { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/app/supabase-db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
){
   if(req.method == "GET"){
    const {data: hospitals, error} = await supabase.from("hospitals").select("*")

    if(error) return res.status(400).json({error: error.message})
    return res.status(200).json(hospitals)
   }
}