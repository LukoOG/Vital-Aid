import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
    // const sessionId = req.body.sessionId;
    // const serviceCode = req.body.serviceCode;
    // const phoneNumber = req.body.phoneNumber;
    const text = req.body.text;

    let response = "";
    // console.log(res)

    if (text === "") {
        response = "CON What do you want to check?\n";
        response += "1. First Aid\n";
        response += "2. Suitable Hospital";
    } else if (text === "1") {
        response = "CON What is the problem?\n";
        response += "1. Stomach Pain\n";
        response += "2. Bleeding\n";
        response += "3. Headache\n";
        response += "4. Choking\n";
        response += "5. Fainting\n";
    } else if (text === "2") {
        response = "CON Choose your nearest Location\n"
        response += "1. Ikeja\n";
        response += "2. Agege\n";
        response += "3. Mushin\n";
        response += "4. Akoka";
    } else if (text === "1*1") {
        response = "END You should rest your stomach upward and drink a lot of water. Stay in a well ventilated area, and if severe, visit the nearest hospital";
    } else if (text === "1*2") {
        response = "END  Find a clean piece of cloth and rap around the region tightly and carefully to reduce the bleeding. if severe,check for the nearest hospital.";

    } else if (text === "1*3") {
        response = "END Please You should visit the nearest pharmacy to get a headache drug";
    } else if (text === "1*4"){
        response = "END Encourge the person to cough; if they can't breathe, give them abdominal thrusts.";
    } else if (text === "1*5"){
        response = "END Lay the person on their back, elevate their legs if there are no injuries, and check for breathing.";
    }else if (text === "2*1"){
        response = "END LASUTH, Ikej, Lagos State, 100001";
    }
      // Set content type and send response
      res.setHeader("Content-Type", "text/plain");
      res.status(200).send(response);
      return;
    
    }
    res.status(405).send("Method Not Allowed");
}