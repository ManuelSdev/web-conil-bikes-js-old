import 'src/styles/globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Providers from '@/utils/react-query/providers'
import SiteLayout from '@/components/layout/SiteLayout'

export async function generateStaticParams() {
   return [{ lang: 'es-ES' }]
}
export const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {
   console.log('Params -> ', params)
   return (
      <html lang="es-ES" dir="ltr" className="h-full bg-red-500">
         <body className="h-full">
            <Providers>
               <SiteLayout>{children}</SiteLayout>
            </Providers>
         </body>
      </html>
   )
}
