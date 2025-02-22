import { Message } from "../types";

type formProps = {
    name: string,
    email: string,
    address: string,
    phone: string,
    
}

export async function getAiBodyText(formdata: formProps){
    try{
        const {name, email, address, phone} = formdata;

        const result = await fetch("/api/generate-document",{
            method:"POST",
            headers:{"Content-Type": "application/json",},
            body:JSON.stringify({})
        })
        const data = await result.json()
        console.log(data)

        return data.message
    } catch (error){
        console.log(error)
    }
}