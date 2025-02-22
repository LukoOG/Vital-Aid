import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if(req.method == "POST"){
    let sessionId = req.body.sessionId;
    let serviceCode = req.body.serviceCode;
    let phoneNumber = req.body.phoneNumber;
    let text = req.body.text;

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
        response += "3. Others";
    } else if (text === "2") {
        response = "END Enter your nearest location";
    } else if (text === "1*1") {
        response = "END You should rest your stomach upward and drink a lot of water";
    } else if (text === "1*2") {
        response = "END You should use a cloth to hold the point of bleeding and ensure minimal blood loss";
    } else if (text === "1*3") {
        response = "END Please visit the nearest hospital";
    }
      // Set content type and send response
      res.setHeader("Content-Type", "text/plain");
      res.status(200).send(response);
      return;
    
    }
    res.status(405).send("Method Not Allowed");
}