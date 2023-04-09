import dbConnect from "../../../lib/dbConnect";
import Records from "../../../models/BrgyRecords";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
  const { method } = req;
  //get token from bearer token
  const token = req.headers.authorization.split(" ")[1];
  //verify token
  const verified = jwt.verify(token, process.env.SECRET);
  //get user id from verified token
  const { privilege } = verified;
  await dbConnect();

  if (privilege === "admin") {
    switch (method) {
      case "GET":
        try {
          const records = await Records.find(
            {}
          ); /* find all the data in our database */
          res.status(200).json({ records });
        } catch (error) {
          res.status(400).json({ error: error });
        }
        break;
      case "POST":
        try {
          const record = await Records.create(
            req.body
          ); /* create a new model in the database */
          res.status(201).json({ data: record });
        } catch (error) {
          res.status(400).json({ error: error });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  } else {
    if (method === "GET") {
      try {
        const records = await Records.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ records });
      } catch (error) {
        res.status(400).json({ error: error });
      }
    }
  }
}
