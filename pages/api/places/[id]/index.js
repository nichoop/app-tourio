// pages/api/[id]/index.js
import dbConnect from "../../../../lib/dbConnect";
import Places from "../../../../models/Places";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const place = await Places.findById(id);

      if (!place) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(place);
    } catch (error) {
      response.status(500).json({ status: "Error", message: error.message });
    }
  } else if (request.method === "PATCH") {
    try {
      const updatedPlace = await Places.findByIdAndUpdate(id, request.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedPlace) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(updatedPlace);
    } catch (error) {
      response.status(500).json({ status: "Error", message: error.message });
    }
  } else {
    response.status(405).json({ status: "Method Not Allowed" });
  }
}
