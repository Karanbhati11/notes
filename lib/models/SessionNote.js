import mongoose from "mongoose";

const SessionNoteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

export const SessionNoteModel =
  mongoose.models.SessionNote ?? mongoose.model("SessionNote", SessionNoteSchema);
