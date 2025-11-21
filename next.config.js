const { withContentlayer } = require('next-contentlayer2');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// Плагин для ошибок регистра файлов
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// ⚡ ОБНОВЛЁННАЯ CSP — Google Analytics ДОБАВЛЕН
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    *.vercel-analytics.com
    *.vercel-scripts.com
    *.cloudflareinsights.com;
    
  connect-src 'self'
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://www.googletagmanager.com
    *;

  img-src 'self' data: blob:
    https://www.google-analytics.com
    https://www.googletagmanager.com
    *.supabase.co *;

  style-src 'self' 'unsafe-inline';
  font-src 'self';
  media-src *.s3.amazonaws.com *.shipixen.com;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ' '),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer];

  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '**/*',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '**/*',
        },
        {
          protocol: 'https',
          hostname: 'shipixen.com',
          pathname: '**/*',
        },
      ],
    },
    // 🔥 ПОЛНОСТЬЮ ОБНОВЛЕННЫЕ РЕДИРЕКТЫ для решения всех проблем
    async redirects() {
      return [
        // Основной редирект с версии без www на версию с www
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'boileriabi.ee',
            },
          ],
          destination: 'https://www.boileriabi.ee/:path*',
          permanent: true,
        },
        // Редирект для опечатанного домена (из отчетов GSC)
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'boileriabi.ee',
            },
          ],
          destination: 'https://www.boileriabi.ee/:path*',
          permanent: true,
        },
        // 🔥 ДОБАВЛЕНО: Редирект для опечатки bolleriabl.ee (из нового отчета)
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'bolleriabl.ee',
            },
          ],
          destination: 'https://www.boileriabi.ee/:path*',
          permanent: true,
        },
        // Редирект для поисковых запросов (решает проблему 404)
        {
          source: '/search',
          destination: '/',
          permanent: false,
        },
        {
          source: '/search/:path*',
          destination: '/',
          permanent: false,
        },
        // Редирект для проблемных URL из отчетов
        {
          source: '/feed.xml',
          destination: '/rss.xml', // или укажите правильный путь к RSS
          permanent: true,
        },
        {
          source: '/api/cg',
          destination: '/',
          permanent: false,
        },
        {
          source: '/api/:path*',
          destination: '/',
          permanent: false,
        },
        // 🔥 ДОБАВЛЕНО: Редирект для /overview если эта страница не существует
        {
          source: '/overview',
          destination: '/',
          permanent: false,
        },
      ];
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.plugins.push(new CaseSensitivePathsPlugin());

      return config;
    },
  });
};
