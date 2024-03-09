import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handleRemove(req: NextApiRequest, res: NextApiResponse) {
  let client;

  try {
    // Check if the environment variable is defined
    if (!uri) {
      console.error('MONGODB_URI environment variable is not defined');
      return res.status(500).json({ response: "Failed to remove resource. MONGODB_URI environment variable is not defined" });
    }

    client = new MongoClient(uri);
    await client.connect();

    const { selection } = req.body;
    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("resources");
    
    const condition = { title: selection };
    await myColl.deleteOne(condition);

    res.status(200).json({ msg: "Resource successfully removed!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Failed to remove resource." });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
