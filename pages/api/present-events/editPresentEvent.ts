import { NextApiRequest, NextApiResponse } from "next";
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
  try {
    
    await client.connect();

    const data = req.body;
    const dataObject = JSON.parse(data);

    const filter = {};
    const updateEvent = {
      $set: {
        past: "NO",
        eventTitle: dataObject.eventTitle,
        location: dataObject.location,
        building: dataObject.building,
        room: dataObject.room,
        date: dataObject.date,
        startTime: dataObject.startTime,
        endTime: dataObject.endTime,
        description: dataObject.description,
        linkName: dataObject.linkName,
        link: dataObject.link,
      },
    };

    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("events");
    await myColl.updateOne(filter, updateEvent);

    res.status(200).json({ msg: "Event successfully updated!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Failed to update event." });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
