import { places } from "../../../lib/db";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const allPlaces = await places.find({});
      response.status(200).json(allPlaces);
    } catch (error) {
      response.status(500).json({ status: "Error", message: error.message });
    }
  } else {
    response.status(405).json({ status: "Method Not Allowed" });
  }
}
