import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}

if (!uri) {
  console.error('MONGODB_URI environment variable is not defined');
  throw new Error('MONGODB_URI environment variable is not defined');
}

const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get data from the request body
    const { eventTitle, location, building, room, date, startTime, endTime, description, linkName, link } = req.body;

    try {
        await client.connect();

        const myDB = client.db("GS-LSAMP");
        const myColl = myDB.collection("events");

        const docs = [
            {
                past: "NO",
                title: eventTitle,
                location: location,
                building: building,
                room: room,
                date: date,
                startTime: startTime,
                endTime: endTime,
                description: description,
                linkName: linkName,
                link: link
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
