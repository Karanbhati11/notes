import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    name: { type: String, required: true, trim: true },
    clientId: { type: String }, // preserve the client-side id for category references in notes
  },
  { timestamps: true }
);

export const Category =
  mongoose.models.Category ?? mongoose.model("Category", CategorySchema);
