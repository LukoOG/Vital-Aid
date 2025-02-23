import { NextApiRequest, NextApiResponse } from "next";
import { AiBodyResponse } from "@/lib/client/aiResponse";
import { BodyTextPrompt } from "@/lib/client/prompt";
import fs from "fs";
import path from "path";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        // Get user data from the request
        const { name, email, phone, date, situation } = req.body;

        // Load the .docx template file
        const templatePath = path.join(process.cwd(), "public", "template.docx");
        const templateContent = fs.readFileSync(templatePath, "binary");

        // Read the template as a zip file
        const zip = new PizZip(templateContent);
        const doc = new Docxtemplater(zip);

        // Replace placeholders with actual user data
        doc.setData({
            name: name || "John Doe",
            email: email || "John.doe@example.com",
            phone: phone || "+555-555-555",
            date: date || new Date().toLocaleDateString(),
            body_text:  await AiBodyResponse(BodyTextPrompt, situation)  || "This is the body of the letter.",
        });

        // Render the document with the data
        doc.render();

        // Generate the modified `.docx` file
        const generatedBuffer = doc.getZip().generate({ type: "nodebuffer" });

        // Set headers for file download
        res.setHeader("Content-Disposition", 'attachment; filename="generated_letter.docx"');
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

        return res.send(generatedBuffer);
    } catch (error) {
        console.error("Error generating document:", error);
        return res.status(500).json({ error: "Failed to generate document" });
    }
}
