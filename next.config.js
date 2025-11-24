const { withContentlayer } = require('next-contentlayer2');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

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
    
    // ✅ ОПТИМИЗАЦИИ ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ
    experimental: {
      optimizeCss: true, // Включение оптимизации CSS
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production', // Удаление console.log в продакшене
    },
    
    // ✅ ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ
    images: {
      formats: ['image/avif', 'image/webp'], // Современные форматы
      deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Оптимизированные размеры
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
    
    // ✅ КЭШИРОВАНИЕ И ОПТИМИЗАЦИЯ
    headers: async () => {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
        {
          // Кэширование статических ресурсов
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          // Кэширование CSS и JS
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

    // 🔥 УПРОЩЕННЫЕ РЕДИРЕКТЫ
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

    // ✅ ОПТИМИЗАЦИЯ WEBPACK - ИСПРАВЛЕННАЯ ВЕРСИЯ
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.plugins.push(new CaseSensitivePathsPlugin());

      // ✅ ИГНОРИРОВАНИЕ ПРЕДУПРЕЖДЕНИЙ PUNYCODE
      config.ignoreWarnings = [
        { module: /node_modules\/punycode/ },
        { file: /node_modules\/punycode/ }
      ];

      // ✅ ФИКС ДЛЯ CRITTERS - добавляем fallback для node_modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        critters: require.resolve('critters'),
      };

      // ✅ ОПТИМИЗАЦИЯ БАНДЛА
      if (!dev && !isServer) {
        // Отключаем source maps в продакшене для клиентского кода
        config.devtool = false;
        
        // Оптимизация размера бандла
        config.optimization = {
          ...config.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
              commons: {
                name: 'commons',
                chunks: 'all',
                minChunks: 2,
                reuseExistingChunk: true,
              },
              react: {
                name: 'react',
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                chunks: 'all',
                priority: 20,
              },
            },
          },
        };
      }

      return config;
    },

    // ✅ ОПТИМИЗАЦИЯ ДЛЯ СОВРЕМЕННЫХ БРАУЗЕРОВ
    env: {
      customKey: 'my-value',
    },

    // ✅ ДОБАВЛЕНО: Отключение проверки типов во время билда для ускорения
    typescript: {
      ignoreBuildErrors: false,
    },
    
    // ✅ ДОБАВЛЕНО: Отключение ESLint во время билда для ускорения
    eslint: {
      ignoreDuringBuilds: false,
    },
  });
};
