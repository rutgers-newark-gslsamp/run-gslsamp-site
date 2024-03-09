/**LOADS THE RESOURCE SELECTED BY THE USER */

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {   
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("events");
    const { selection } = req.body;
    const query = { title: selection }; 
    const result = await myColl.find(query).toArray();
    await client.close();
    return res.status(200).json({ response: result, msg: "Loading ..." });
  } catch (error) {
    return res.status(500).json({ msg: "Error loading event." });
  }
}
