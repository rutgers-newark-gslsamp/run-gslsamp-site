import type { NextApiRequest, NextApiResponse } from "next";
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        title,
        description,
        linkName,
        link
    } = req.body;

    try {
        await client.connect();

        const myDB = client.db("GS-LSAMP");
        const myColl = myDB.collection("resources");

        const docs = [
            {
                title: title,
                description: description,
                link: link,
                linkName: linkName
            },
        ];

        await myColl.insertMany(docs);

        return res.status(201).json({ response: "Resource added successfully." });

    } catch (error) {
        console.error("Failed to add resource:", error);
        return res.status(500).json({ response: "Failed to add resource." });
    } finally {
        await client.close();
    }
}