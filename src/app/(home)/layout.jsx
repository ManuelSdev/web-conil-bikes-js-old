import '@/app/globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import HomeShell from '@/components/layouts/site/HomeShell'

export async function generateStaticParams() {
   return [{ lang: 'es-ES' }]
}
export const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function SiteLayout(props) {
   return (
      <html lang="es-ES" dir="ltr" className="h-full bg-red-500">
         <body className="h-full">
            <ReduxProviderWrapper>
               <HomeShell {...props} />
            </ReduxProviderWrapper>
         </body>
      </html>
   )
}
