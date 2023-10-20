import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {   
    //request body json and store into individual variables
    const {fname, lname, email, inquiry, message } = req.body;
    
    //sendgrid mail api
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: `${email}`, // CHANGE: gs-lsamp contact email address
        from: 'chrislorenzo09@gmail.com', // Change to your verified sender
        subject: `Contact Form GS-LSAMP: ${inquiry}`,
        html: `
            <h2>From: ${fname} ${lname}</h2>
            <h3>Sender Email: ${email}</h3>

            <p>Message:</p>
            <p>${message}</p>`,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error: any) => {
        console.error(error)
    })

    //200 represents req was successful and it responds with a json which is message: "success"
    res.status(200).json({message: "success"})
}
