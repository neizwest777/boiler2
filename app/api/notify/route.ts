import { NextResponse } from "next/server";

// ⚠️ Безопасно получаем токены из переменных окружения
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

// 🚫 Список бот-агентов
function isBot(ua: string) {
  const bots = [
    "bot",
    "crawl",
    "spider",
    "curl",
    "fetch",
    "python",
    "scraper",
    "google",
    "bing",
    "facebook",
    "yandex",
    "facebookexternalhit",
  ];
  return bots.some((b) => ua.toLowerCase().includes(b));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { page, ref, ua, language, utm = {} } = body;

    const userAgent = ua || "unknown";

    // ❌ Если это бот — игнорируем
    if (isBot(userAgent)) {
      return NextResponse.json({ skipped: "bot detected" });
    }

    // 🧠 Определяем ОС
    const os =
      /Windows/i.test(userAgent) ? "Windows" :
      /Mac OS/i.test(userAgent) ? "MacOS" :
      /Android/i.test(userAgent) ? "Android" :
      /iPhone|iPad/i.test(userAgent) ? "iOS" :
      "Unknown";

    // 🧠 Определяем браузер
    const browser =
      /Chrome/i.test(userAgent) ? "Chrome" :
      /Safari/i.test(userAgent) ? "Safari" :
      /Firefox/i.test(userAgent) ? "Firefox" :
      /Edg/i.test(userAgent) ? "Edge" :
      "Unknown";

    // 📝 Формируем сообщение
    const text = `
🔥 *Новый посетитель сайта!*

📄 *Страница:* ${page}
🌍 *Источник:* ${ref}

🖥 *OS:* ${os}
🌐 *Браузер:* ${browser}
🗣 *Язык:* ${language}

🧭 *UTM:*
${
  Object.keys(utm).length
    ? Object.entries(utm).map(([k, v]) => `• ${k}: ${v}`).join("\n")
    : "—"
}

📱 *User-Agent:*  
${userAgent}

⏰ *Время:* ${new Date().toLocaleString("ru-RU")}
    `;

    // URL Telegram API
    const telegramURL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    // 📤 Отправка уведомления
    await fetch(telegramURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("TG Notify Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
