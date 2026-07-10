import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongoose";
import { User } from "@/lib/models/User";
import { signToken, setAuthCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });

    if (password.length < 6)
      return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });

    await connectDB();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing)
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({ email, passwordHash });

    const token = signToken({
      userId: user._id.toString(),
      email: user.email,
    });

    const res = NextResponse.json({
      user: { email: user.email },
    });

    setAuthCookie(res, token);
    return res;
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
