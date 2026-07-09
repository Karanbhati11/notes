import { NextResponse } from "next/server";
import { cookies } from "next/headers";

async function getVerifiedUserId() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("mn_token")?.value;
    if (!token) return null;

    const jwt = (await import("jsonwebtoken")).default;
    const session = jwt.verify(token, process.env.JWT_SECRET);

    const { connectDB } = await import("@/lib/mongoose");
    const { User } = await import("@/lib/models/User");
    await connectDB();

    const user = await User.findById(session.userId).select("emailVerified").lean();
    return user?.emailVerified ? session.userId : null;
  } catch {
    return null;
  }
}

// GET — fetch saved session note
export async function GET() {
  const userId = await getVerifiedUserId();
  if (!userId) return NextResponse.json({ content: null });

  const { connectDB } = await import("@/lib/mongoose");
  const { SessionNoteModel } = await import("@/lib/models/SessionNote");
  await connectDB();

  const doc = await SessionNoteModel.findOne({ userId }).lean();
  return NextResponse.json({ content: doc?.content ?? null, updatedAt: doc?.updatedAt ?? null });
}

// POST — save session note
export async function POST(req) {
  const userId = await getVerifiedUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { content } = await req.json();

  const { connectDB } = await import("@/lib/mongoose");
  const { SessionNoteModel } = await import("@/lib/models/SessionNote");
  await connectDB();

  await SessionNoteModel.findOneAndUpdate(
    { userId },
    { content, updatedAt: new Date() },
    { upsert: true, new: true }
  );

  return NextResponse.json({ ok: true });
}

// DELETE — clear session note
export async function DELETE() {
  const userId = await getVerifiedUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { connectDB } = await import("@/lib/mongoose");
  const { SessionNoteModel } = await import("@/lib/models/SessionNote");
  await connectDB();

  await SessionNoteModel.deleteOne({ userId });
  return NextResponse.json({ ok: true });
}
