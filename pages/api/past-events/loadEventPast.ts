/**LOADS THE RESOURCE SELECTED BY THE USER */

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
    return res.status(500).json({ response: "Failed to load event. MONGODB_URI environment variable is not defined" });
  }

  try {
    const client = new MongoClient(uri);
    await client.connect();
    
    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("events-past");
    
    const { selection } = req.body;
    const query = { title: selection }; 
    const result = await myColl.find(query).toArray();

    await client.close();

    return res.status(200).json({ response: result, msg: "Loading ..." });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ msg: "Error loading event." });
  }
}
