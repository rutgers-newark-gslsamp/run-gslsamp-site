/**QUERIES THE TITLES OF ALL PAST EVENTS */

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function GetTitles(req: NextApiRequest, res: NextApiResponse) {
  try {
      const client = new MongoClient(uri);
      await client.connect();

      const myDB = client.db("GS-LSAMP");
      const myColl = myDB.collection("events-past");

      const result = await myColl.find({}).toArray();

      res.status(200).json({ response: result });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ msg: "Error getting event(s)." });
  } finally {
      if (client) {
          await client.close();
      }
  }
}

