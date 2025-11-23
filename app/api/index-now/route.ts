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
    'https://www.boileriabi.ee/kontakt',
    // Adding the non-www URLs you provided
    'https://boileriabi.ee/',
    'https://boileriabi.ee/paigaldus',
    'https://boileriabi.ee/remont',
    'https://boileriabi.ee/hooldus',
    'https://boileriabi.ee/boileri-paigaldus-tallinna-piirkonnas',
    'https://boileriabi.ee/boileri-remont-tallinna-piirkonnas',
    'https://boileriabi.ee/boileri-hooldus-tallinna-piirkonnas',
    'https://boileriabi.ee/hadaabi',
    'https://boileriabi.ee/hinnad',
    'https://boileriabi.ee/meist',
    'https://boileriabi.ee/garantii',
    'https://boileriabi.ee/kontakt',
    'https://boileriabi.ee/teenused',
    'https://boileriabi.ee/konsultatsioon',
    'https://boileriabi.ee/vorm',
    'https://boileriabi.ee/terms',
    'https://boileriabi.ee/privacy'
  ];

  const results = [];

  for (const url of urls) {
    try {
      // Determine host based on URL
      const host = url.includes('www.boileriabi.ee') ? 'www.boileriabi.ee' : 'boileriabi.ee';
      
      // Метод IndexNow (поддерживается Bing, Yandex и другими)
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          host: host,
          key: 'your-indexnow-key', // Замените на реальный ключ
          keyLocation: `https://${host}/indexnow-key.txt`,
          urlList: [url]
        })
      });

      if (response.ok) {
        results.push({ url, status: 'submitted' }); // Fixed: using {} instead of ()
      } else {
        results.push({ url, status: 'error', error: await response.text() }); // Fixed: using {} instead of ()
      }
    } catch (error) {
      results.push({ url, status: 'error', error: error.message }); // Fixed: using {} instead of ()
    }
  }

  return NextResponse.json({ 
    message: 'URLs submitted via IndexNow',
    results 
  });
}
