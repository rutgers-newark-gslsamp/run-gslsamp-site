import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check if the environment variable is defined
    const uri = process.env.MONGODB_URI;

    // Check if the URI is defined before creating a new client
    if (!uri) {
        console.error('MONGODB_URI environment variable is not defined');
        return res.status(500).json({ response: "Failed to add event. MONGODB_URI environment variable is not defined" });
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();

        const myDB = client.db("GS-LSAMP");
        const myColl = myDB.collection("events-past");

        // No need to parse req.body again, it's already parsed
        const dataObject = req.body;

        const docs = [
            {
                title: dataObject.title,
                date: dataObject.date,
                description: dataObject.description
            },
        ];

        await myColl.insertMany(docs);

        return res.status(201).json({ response: "Event added successfully." });

    } catch (error) {
        console.error("Failed to add event:", error);
        return res.status(500).json({ response: "Failed to add event." });
    } finally {
        await client.close();
    }
}
