import { NextApiRequest, NextApiResponse } from "next";
import { AiChatResponse } from "@/lib/client/aiResponse";

import { firstAidSysPrompt } from "@/lib/client/prompt";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
){
  if(req.method=='POST'){
    try{
      const { history, prompt } = req.body
      const aiText = await AiChatResponse(history, prompt, firstAidSysPrompt)
      if (!aiText) return res.status(401).json({success: false, message: "Ai did not return next",})
        
      //console.log(aiText)
      return res.status(200).json({success:true,message:aiText})

    } catch (error){
      console.error(error);
      return res.status(401).json({success: false,message: `Server error: ${error}`,});
    }
  }
}