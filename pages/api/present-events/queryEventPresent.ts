/**QUERIES THE TITLES OF ALL PRESENT EVENTS */

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}
// Check if the environment variable is defined
if (!uri) {
  console.error('MONGODB_URI environment variable is not defined');
  throw new Error('MONGODB_URI environment variable is not defined');
}

const client = new MongoClient(uri);

export default async function GetTitles(req: NextApiRequest, res: NextApiResponse) {
  try {      
    await client.connect();

    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("events");

    const result = await myColl.find({}).toArray();

    res.status(200).json({ response: result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Error getting event(s)." });
  } finally {
    await client.close();
  }
}
