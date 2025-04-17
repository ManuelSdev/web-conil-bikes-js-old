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
   /*
   cookies: {
      secure: true,
      httpOnly: true,
   },
   */

   async rewrites() {
      //https://nextjs.org/docs/api-reference/next.config.js/rewrites
      return [
         {
            source: '/__/auth/:path*',
            destination: `https://conil-bikes.firebaseapp.com/__/auth/:path*`,
         },
      ]
   },
}

module.exports = nextConfig
