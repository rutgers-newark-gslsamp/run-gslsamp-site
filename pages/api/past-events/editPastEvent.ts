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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the environment variable is defined
  const uri = process.env.MONGODB_URI;

  // Check if the URI is defined before creating a new client
  if (!uri) {
    console.error('MONGODB_URI environment variable is not defined');
    return res.status(500).json({ response: "Failed to add event. MONGODB_URI environment variable is not defined" });
  }

  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();

    const {
      title,
      date,
      description,
    } = req.body;

    const filter = {};
    const updateEvent = {
      $set: {
        title: title,
        date: date,
        description: description,
      },
    };

    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("events-past");
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
