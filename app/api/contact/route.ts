import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "BoileriABI <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "prismestonia@gmail.com",
      subject: "Uus päring Boileriabi.ee",
      replyTo: email || undefined,
      html: `
        <h2>Uus päring kodulehelt</h2>
        <p><b>Nimi:</b> ${name}</p>
        <p><b>E-post:</b> ${email || "-"}</p>
        <p><b>Telefon:</b> ${phone}</p>
        <p><b>Sõnum:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
