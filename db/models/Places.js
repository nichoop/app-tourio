// models/Places.js
import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lacation: { type: String, required: true },
  imageUrl: { type: Number, required: true },
  Mapurl: { type: String, required: true },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

export default mongoose.models.Places || mongoose.model("Places", PlaceSchema);
