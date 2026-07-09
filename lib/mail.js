import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email, token) {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify?token=${token}`;

  await resend.emails.send({
    from: "Sticky Notes Online <onboarding@resend.dev>",
    to: email,
    subject: "Verify your Sticky Notes Online account",
    html: `
      <div style="font-family:Inter,sans-serif;max-width:480px;margin:0 auto;background:#000;color:#fff;padding:40px;border:1px solid #2a2a2a;border-radius:4px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:32px">
          <span style="font-size:24px">★</span>
          <span style="font-weight:700;font-size:18px;color:#B388FF">Sticky Notes Online</span>
        </div>
        <h2 style="margin:0 0 16px;font-size:20px;color:#fff">Verify your email</h2>
        <p style="color:#CFCFCF;margin:0 0 24px;line-height:1.6">
          Click the button below to verify your email address and unlock cloud storage for your notes.
          This link expires in <strong>24 hours</strong>.
        </p>
        <a href="${url}"
           style="display:inline-block;background:#B388FF;color:#000;font-weight:700;padding:12px 28px;border-radius:2px;text-decoration:none;font-size:14px">
          Verify Email
        </a>
        <p style="color:#707070;font-size:12px;margin-top:32px">
          If you didn't create a Sticky Notes Online account, ignore this email.
        </p>
      </div>
    `,
  });
}
