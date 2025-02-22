import { Message } from "../types";

export async function getFirstAid(messages: Message[], prompt:string){
    try{
        const result = await fetch("/api/ai/chat",{
            method:"POST",
            headers:{"Content-Type": "application/json",},
            body:JSON.stringify({history:messages, prompt:prompt})
        })
        const data = await result.json()
        console.log(data)

        return data.message
    } catch (error){
        console.log(error)
    }
}