import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    // Read cookie directly — no DB touch if no token present
    const cookieStore = await cookies();
    const token = cookieStore.get("mn_token")?.value;

    if (!token) {
      return NextResponse.json({ user: null });
    }

    // Only import heavy deps when we actually have a token
    const jwt = (await import("jsonwebtoken")).default;
    const secret = process.env.JWT_SECRET;

    let session;
    try {
      session = jwt.verify(token, secret);
    } catch {
      return NextResponse.json({ user: null });
    }

    const { connectDB } = await import("@/lib/mongoose");
    const { User } = await import("@/lib/models/User");

    await connectDB();
    const user = await User.findById(session.userId).select("email emailVerified").lean();

    if (!user) return NextResponse.json({ user: null });

    return NextResponse.json({
      user: { email: user.email, emailVerified: user.emailVerified },
    });
  } catch (err) {
    console.error("[/api/auth/me]", err);
    return NextResponse.json({ user: null });
  }
}
