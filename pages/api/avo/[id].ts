import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database/db"

const Avo = async (request : NextApiRequest, response: NextApiResponse) => {
  const { query : { id } } = request
  const db = new DB()
  const entry =  await db.getById(id as string)

  response.status(200).json(entry)
  
  // const idEntry = id.toString()
  // response.statusCode = 200
  // response.setHeader('Content-type', 'application/json')
  // response.end(JSON.stringify({ [`${id}`] : entry}))
}

export default Avo