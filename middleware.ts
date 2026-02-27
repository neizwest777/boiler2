import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Spam URL patterns
const SPAM_PATTERNS = /(porno|putas|xxx|escort|prostitutas|follando|casino|poker|viagra|cialis|pharma|payday|adult\.dating|slot\.machine|penis|buy\.cheap|xanax|ambien)/i;

// Attack paths
const ATTACK_PATHS = /(wp-login|wp-admin|wp-content|wp-includes|xmlrpc\.php|\.env|\.git|\.svn|phpinfo|adminer|phpmyadmin)/i;

// Bad bots
const BAD_BOTS = /(SemrushBot|AhrefsBot|MJ12bot|DotBot|BLEXBot|Bytespider|GPTBot|CCBot|DataForSeoBot|Scrapy|HTTrack|nikto|sqlmap|nmap|masscan|dirbuster|gobuster|wpscan|acunetix)/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get('user-agent') || '';

  // Block spam URLs
  if (SPAM_PATTERNS.test(pathname)) {
    return new NextResponse(null, { status: 410 });
  }

  // Block attack paths
  if (ATTACK_PATHS.test(pathname)) {
    return new NextResponse(null, { status: 403 });
  }

  // Block bad bots
  if (BAD_BOTS.test(ua)) {
    return new NextResponse(null, { status: 403 });
  }

  // Block empty user-agent
  if (!ua || ua.trim() === '') {
    return new NextResponse(null, { status: 403 });
  }

  // Block suspicious query strings (SQL injection, XSS)
  const qs = request.nextUrl.search;
  if (qs && /(union.*select|concat.*\(|benchmark\(|sleep\(|<script|javascript:|eval\()/i.test(qs)) {
    return new NextResponse(null, { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|css|js)$).*)'],
};
