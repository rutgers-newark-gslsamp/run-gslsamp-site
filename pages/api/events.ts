import type { NextApiRequest, NextApiResponse } from "next";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

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

  export default async function GetEvents(req: NextApiRequest, res: NextApiResponse) {

    getEvents().catch(console.dir)
    async function getEvents(){
        try{
            //connect to db
            await client.connect();

            //select db
            const myDB = client.db('web_content_test');

            //select cluster
            const myColl = myDB.collection("events");

            //query data for present and past
            const queryPres = { past: "NO" };
            const queryPast = { past: "YES" };

            const resultPres = await myColl.find(queryPres).toArray({});
            const resultPast = await myColl.find(queryPast).toArray({});
            //to new file
            //, responsePast: resultPast, msg: "Success getting events"

            console.log("success!")

            //return status and data
            return res.status(200).json({resultPres, resultPast})

        } catch(error) {
            return res.status(500).json({msg: "Error getting events."})

        } finally {
            await client.close();
        }
    }

  }