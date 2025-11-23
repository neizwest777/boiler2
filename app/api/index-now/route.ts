import { NextResponse } from 'next/server';

export async function POST() {
  const urls = [
    'https://www.boileriabi.ee/',
    'https://www.boileriabi.ee/paigaldus',
    'https://www.boileriabi.ee/remont',
    'https://www.boileriabi.ee/hooldus',
    'https://www.boileriabi.ee/boileri-paigaldus-tallinna-piirkonnas',
    'https://www.boileriabi.ee/boileri-remont-tallinna-piirkonnas',
    'https://www.boileriabi.ee/boileri-hooldus-tallinna-piirkonnas',
    'https://www.boileriabi.ee/hadaabi',
    'https://www.boileriabi.ee/hinnad',
    'https://www.boileriabi.ee/meist',
    'https://www.boileriabi.ee/garantii',
    'https://www.boileriabi.ee/kontakt'
  ];

  const results = [];

  for (const url of urls) {
    try {
      // Метод IndexNow (поддерживается Bing, Yandex и другими)
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: 'www.boileriabi.ee',
          key: 'your-indexnow-key', // Нужно создать ключ
          keyLocation: 'https://www.boileriabi.ee/indexnow-key.txt',
          urlList: [url]
        })
      });

      if (response.ok) {
        results.push({ url, status: 'submitted' });
      } else {
        results.push({ url, status: 'error', error: await response.text() });
      }
    } catch (error) {
      results.push({ url, status: 'error', error: error.message });
    }
  }

  return NextResponse.json({ 
    message: 'URLs submitted via IndexNow',
    results 
  });
}
