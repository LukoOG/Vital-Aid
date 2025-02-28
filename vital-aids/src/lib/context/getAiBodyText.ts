type formProps = {
    name: string,
    email: string,
    address: string,
    phone: string,
    situation: string,
    
}

export async function getAiBodyText(formdata: formProps){
    try{
        const {name, email, address, phone, situation} = formdata;

        const result = await fetch("/api/generate-document",{
            method:"POST",
            headers:{"Content-Type": "application/json",},
            body:JSON.stringify({name, email, address, phone, situation})
        })
        const data = await result
        console.log(data)
        return data

    } catch (error){
        console.log(error)
    }
}