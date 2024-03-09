import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handleRemove(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(uri);

  try {
    const { selection } = req.body;
    await client.connect();

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
