const { withContentlayer } = require('next-contentlayer2');

// ✅ БЕЗОПАСНАЯ ЗАГРУЗКА BUNDLE ANALYZER
let withBundleAnalyzer;
try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
} catch (error) {
  // Если bundle-analyzer не установлен, используем заглушку
  console.warn('@next/bundle-analyzer not found, skipping bundle analysis');
  withBundleAnalyzer = (config) => config;
}

// Плагин для ошибок регистра файлов
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// ⚡ ОПТИМИЗИРОВАННАЯ CSP 
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://analytics.ahrefs.com
    *.vercel-analytics.com
    *.vercel-scripts.com
    *.cloudflareinsights.com;
    
  connect-src 'self'
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://www.googletagmanager.com
    https://analytics.ahrefs.com
    *;

  img-src 'self' data: blob:
    https://www.google-analytics.com
    https://www.googletagmanager.com
    *.supabase.co *;

  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
  media-src *.s3.amazonaws.com *.shipixen.com;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
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
 * @type {import('next').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer];

  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['app', 'components', 'layouts', 'scripts'],
    },
    
    // ✅ ОПТИМИЗАЦИИ ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ
    experimental: {
      optimizeCss: true,
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    
    // ✅ ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ
    images: {
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256],
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
    
    // ✅ КЭШИРОВАНИЕ
    headers: async () => {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
        {
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/chunks/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },

    // 🔥 РЕДИРЕКТЫ
    async redirects() {
      return [
        {
          source: '/search',
          destination: '/',
          permanent: false,
        },
        {
          source: '/feed.xml',
          destination: '/rss.xml',
          permanent: true,
        },
        {
          source: '/api/cg',
          destination: '/',
          permanent: false,
        },
        {
          source: '/overview',
          destination: '/',
          permanent: true,
        },
      ];
    },

    // ✅ ОПТИМИЗАЦИЯ WEBPACK
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.plugins.push(new CaseSensitivePathsPlugin());

      // ✅ ИГНОРИРОВАНИЕ ПРЕДУПРЕЖДЕНИЙ
      config.ignoreWarnings = [
        { module: /node_modules\/punycode/ },
        { file: /node_modules\/punycode/ }
      ];

      // ✅ ФИКС ДЛЯ CRITTERS
      config.resolve.fallback = {
        ...config.resolve.fallback,
        critters: require.resolve('critters'),
      };

      // ✅ ОПТИМИЗАЦИЯ БАНДЛА
      if (!dev && !isServer) {
        config.devtool = false;
      }

      return config;
    },

    env: {
      customKey: 'my-value',
    },
  });
};
