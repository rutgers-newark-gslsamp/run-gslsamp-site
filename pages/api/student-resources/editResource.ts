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
    client = new MongoClient(uri);
    await client.connect();

    const {
      title,
      description,
      link,
      linkName,
    } = req.body;

    const filter = {};
    const updateResource = {
      $set: {
        title: title,
        description: description,
        link: link,
        linkName: linkName
      },
    };

    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("resources");
    await myColl.updateOne(filter, updateResource);

    res.status(200).json({ msg: "Resource successfully updated!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Failed to update resource." });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
