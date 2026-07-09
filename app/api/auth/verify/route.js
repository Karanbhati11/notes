import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import { User } from "@/lib/models/User";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token)
      return NextResponse.redirect(new URL("/?verified=invalid", req.url));

    await connectDB();

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: new Date() },
    });

    if (!user)
      return NextResponse.redirect(new URL("/?verified=invalid", req.url));

    user.emailVerified = true;
    user.verifyToken = null;
    user.verifyTokenExpiry = null;
    await user.save();

    return NextResponse.redirect(new URL("/?verified=success", req.url));
  } catch (err) {
    console.error("Verify error:", err);
    return NextResponse.redirect(new URL("/?verified=error", req.url));
  }
}
