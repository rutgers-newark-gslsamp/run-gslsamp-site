import nodemailer from "nodemailer"
import type { NextApiRequest, NextApiResponse } from "next";
//a

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
    //data coming in
    const {fname, lname, email, inquiry, message } = req.body;


    const user = "chrislorenzo09@gmail.com";
    const pass = "lqunjswdpcsxsdy";

    //data validation here
    const data = {
        fname,
        lname, 
        email, 
        message, 
        inquiry,
    };

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 456,
        secure: true, //upgrade later with STARTTLS
        auth: {
            user: user,
            pass: pass,
        },
    });

    try {

        const mail = await transporter.sendMail({
            from: user,
            to: user,
            replyTo: email,
            subject: `Contact form submission from ${fname}`,
            html:`
            <p>Name: ${fname}</p>
            <p>Name: ${email}</p>
            <p>Name: ${inquiry}</p>
            <p>Name: ${message}</p>
            `,
        });

        console.log("Message send: %s,", mail.messageId);

        return res.status(200).json({ message: "success" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Could not send the email. Your message was not sent.",
        });
    }
}