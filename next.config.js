const path = require('path');
const { withContentlayer } = require('next-contentlayer2');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// ⚡ Оптимизированная CSP
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
 */
module.exports = withContentlayer({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  eslint: {
    dirs: ['app', 'components', 'layouts', 'scripts'],
  },

  experimental: {
    optimizeCss: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', pathname: '**/*' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '**/*' },
      { protocol: 'https', hostname: 'shipixen.com', pathname: '**/*' },
    ],
  },

  headers: async () => [
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
  ],

  // 🔥 Правильная канонизация домена → https://www.boileriabi.ee
  async redirects() {
    return [
      // 1) http://boileriabi.ee → https://www.boileriabi.ee
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'boileriabi.ee' }],
        destination: 'https://www.boileriabi.ee/:path*',
        permanent: true,
      },

      // 2) http://www.boileriabi.ee → https://www.boileriabi.ee
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.boileriabi.ee' }],
        destination: 'https://www.boileriabi.ee/:path*',
        permanent: true,
      },

      // 3) https://boileriabi.ee → https://www.boileriabi.ee
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'boileriabi.ee' }],
        destination: 'https://www.boileriabi.ee/:path*',
        permanent: true,
      },

      // ⭐ Старые редиректы
      { source: '/search', destination: '/', permanent: false },
      { source: '/feed.xml', destination: '/rss.xml', permanent: true },
      { source: '/api/cg', destination: '/', permanent: false },
      { source: '/overview', destination: '/', permanent: true },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Case sensitive paths plugin
    config.plugins.push(new CaseSensitivePathsPlugin());

    config.ignoreWarnings = [
      { module: /node_modules\/punycode/ },
      { file: /node_modules\/punycode/ },
    ];

    // Critters fallback
    config.resolve.fallback = {
      ...config.resolve.fallback,
      critters: require.resolve('critters'),
    };

    // ⭐ Alias '@' → корень проекта
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
    };

    if (!dev && !isServer) {
      config.devtool = false;
    }

    return config;
  },

  env: {
    customKey: 'my-value',
  },
});
