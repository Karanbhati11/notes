import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, default: "" },
    content: { type: String, required: true },
    isEncrypted: { type: Boolean, default: false },
    color: { type: String, default: "purple" },
    categoryId: { type: String, default: null },
    createdAt: { type: String }, // keep as ISO string to match localStorage shape
  },
  { timestamps: false }
);

export const Note = mongoose.models.Note ?? mongoose.model("Note", NoteSchema);
