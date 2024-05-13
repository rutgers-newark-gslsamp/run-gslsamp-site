import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

//const uri = process.env.MONGODB_URI;
const uri = "mongodb+srv://christinobarbosa09:jerrysiceparty77@cluster0.6zcmnen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const config = {
  api: {
    externalResolver: true,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the environment variable is defined
  if (!uri) {
    console.error('MONGODB_URI environment variable is not defined');
    return res.status(500).json({ response: "Failed to update link. MONGODB_URI environment variable is not defined" });
  }

  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();

    const {
      link
    } = req.body;

    const filter = {};
    const updateResource = {
      $set: {
        link: link,
      },
    };

    const myDB = client.db("GS-LSAMP");
    const myColl = myDB.collection("application-link");
    await myColl.updateOne(filter, updateResource);

    res.status(200).json({ msg: "Link successfully updated!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Failed to update link." });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
