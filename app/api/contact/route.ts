import { NextResponse } from "next/server";

const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TG_CHAT = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, service, address } = await req.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const serviceLabel = service || "—";
    const addressLabel = address || "—";

    const text =
      `🔧 <b>Uus tellimus boileriabi.ee</b>\n\n` +
      `👤 Nimi: ${name}\n` +
      `📞 Tel: ${phone}\n` +
      (email ? `📧 E-post: ${email}\n` : "") +
      `📍 Aadress: ${addressLabel}\n` +
      `🛠 Teenus: ${serviceLabel}\n` +
      `📝 Kirjeldus: ${message}`;

    await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        chat_id: TG_CHAT,
        text,
        parse_mode: "HTML",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
