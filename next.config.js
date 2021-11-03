module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  future: { strictPostcssConfiguration: true },
  experimental: {},
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: [
      "play.tailwindcss.com", // Tailwind CSS Logo
    ],
  },
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      })
    }

    return config
  },
}
