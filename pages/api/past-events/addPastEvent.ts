import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;

  try {
    client = new MongoClient(uri, { useUnifiedTopology: true });
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
