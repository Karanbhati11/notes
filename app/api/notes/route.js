import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongoose";
import { Note } from "@/lib/models/Note";

async function getUserId() {
  const session = await getSession();
  if (!session) return null;
  return session.userId;
}

// GET — fetch all notes for the logged-in user
export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectDB();
  const notes = await Note.find({ userId }).lean();
  // Strip MongoDB fields, return clean client shape
  const clean = notes.map(({ _id, userId: _u, __v, ...rest }) => ({
    _id: _id.toString(),
    ...rest,
  }));
  return NextResponse.json({ notes: clean });
}

// POST — replace all notes for the logged-in user (full sync)
export async function POST(req) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { notes } = await req.json();
  if (!Array.isArray(notes)) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  await connectDB();
  // Delete existing and re-insert — simple full-replace sync
  await Note.deleteMany({ userId });
  if (notes.length > 0) {
    await Note.insertMany(
      notes.map(({ _id, ...n }) => ({ ...n, userId }))
    );
  }

  return NextResponse.json({ ok: true });
}
