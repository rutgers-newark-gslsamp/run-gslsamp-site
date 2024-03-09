/**QUERIES THE TITLES OF ALL RESOURCES */

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function GetTitles(req: NextApiRequest, res: NextApiResponse) {
  let client;

  try {
    // Check if the environment variable is defined
    if (!uri) {
      console.error('MONGODB_URI environment variable is not defined');
      return res.status(500).json({ response: "Failed to load titles. MONGODB_URI environment variable is not defined" });
    }

    client = new MongoClient(uri);
    await client.connect();

    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("resources");

    const result = await myColl.find({}).toArray();

    res.status(200).json({ response: result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Error getting titles." });
  } finally {
    if (client) {
      await client.close();
    }
  }
}

