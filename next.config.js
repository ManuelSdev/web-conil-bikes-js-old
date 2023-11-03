/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   webpack: (config) => {
      config.ignoreWarnings = [
         // https://webpack.js.org/configuration/other-options/#ignorewarnings
         {
            module: /node-fetch/,
            message: /.*Can't resolve 'encoding'.*/,
         },
      ]

      return config
   },
   images: {
      domains: [
         'www.sbbikestogo.com',
         //  'www.assets.specialized.com',
         'assets.specialized.com',
         'trek.scene7.com',
      ],
   },
}

module.exports = nextConfig
