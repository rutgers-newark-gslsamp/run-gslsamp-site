import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion, Document } from 'mongodb';

//const uri = process.env.MONGODB_URI;
const uri = "mongodb+srv://christinobarbosa09:jerrysiceparty77@cluster0.6zcmnen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//solves response bug
export const config = {
  api: {
    externalResolver: true,
  },
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default async function GetLink(req: NextApiRequest, res: NextApiResponse) {
  await getLink(res);
}

async function getLink(res: NextApiResponse) {
  try {
    //connect to db
    await client.connect();

    //select db
    const myDB = client.db('GS-LSAMP');

    //select collection
    const myColl = myDB.collection("application-link");

    // Fetch all documents from the collection
    const resultLink  = await myColl.find({}).toArray();

    //return status and data
    return res.status(200).json(resultLink);

  } catch (error) {
    return res.status(500).json({ msg: "Error getting link." });

  } finally {
    await client.close();
  }
}
