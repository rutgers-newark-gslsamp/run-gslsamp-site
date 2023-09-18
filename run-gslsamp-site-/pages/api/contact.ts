import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(req.body)    

    const {fname, lname, email, inquiry, message } = req.body;
    
    //javascript
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey('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')
    const msg = {
        to: `${email}`, // Change to your recipient
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
}
