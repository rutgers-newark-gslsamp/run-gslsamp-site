import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handleRemove(req: NextApiRequest, res: NextApiResponse) {
  // Check if the environment variable is defined
  if (!uri) {
    console.error('MONGODB_URI environment variable is not defined');
    return res.status(500).json({ response: "Failed to remove event. MONGODB_URI environment variable is not defined" });
  }

  const client = new MongoClient(uri);

  try {
    const { selection } = req.body;
    await client.connect();

    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("events");
    
    const condition = { title: selection };
    await myColl.deleteOne(condition);

    res.status(200).json({ msg: "Event successfully removed!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Failed to remove event." });
  } finally {
    await client.close();
  }
}
