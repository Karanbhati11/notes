import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { connectDB } from "@/lib/mongoose";
import { Category } from "@/lib/models/Category";

async function getUserId() {
  const session = await getSession();
  if (!session) return null;
  return session.userId;
}

// GET — fetch all categories
export async function GET() {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const cats = await Category.find({ userId }).lean();
  const clean = cats.map(({ _id, userId: _u, __v, ...rest }) => ({
    id: _id.toString(),
    ...rest,
  }));
  return NextResponse.json({ categories: clean });
}

// POST — full replace sync
export async function POST(req) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { categories } = await req.json();
  if (!Array.isArray(categories)) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  await Category.deleteMany({ userId });
  if (categories.length > 0) {
    await Category.insertMany(categories.map((c) => ({ ...c, userId })));
  }

  return NextResponse.json({ ok: true });
}
