import { MailHandler } from "../service";
import { MailTemplate } from "../service";
import { Request, Response } from "express";

export async function sendMail(req: Request, res: Response) {
    try {
        const { userName, userEmail, subjectText } = req.body;

        const emailConfig = {
            userName,
            userEmail,
            subjectText,
            html: MailTemplate(userName, userEmail, '0000'),
        };

        const mailResponse = await MailHandler(emailConfig);

        if (mailResponse) {
            res.status(200).json({ message: "Mail sent successfully" });
        } else {
            res.status(500).json({ message: "Mail not sent" });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Mail not sent" });
    }
}