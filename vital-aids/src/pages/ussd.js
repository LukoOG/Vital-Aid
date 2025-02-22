const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/test", (req, res)=>{
    console.log("received request")
    res.set("Content-Type", "text/plain");
    res.send("piece of shit");
})

app.post("/ussd", (req, res) => {
    console.log('plpokpok')
    let sessionId = req.body.sessionId;
    let serviceCode = req.body.serviceCode;
    let phoneNumber = req.body.phoneNumber;
    let text = req.body.text;

    let response = "iu";
    console.log(res)

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
    
    res.set("Content-Type", "text/plain");
    res.send(response);
});

app.listen(port, () => 
    console.log(`USSD app listening on port ${port}`)
);
