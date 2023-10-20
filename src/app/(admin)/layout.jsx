import './admin.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Providers from '@/utils/react-query/providers'
import AdminDashboardShell from '@/components/layouts/admin/AdminDashboardShell'

export async function generateStaticParams() {
   return [{ lang: 'es-ES' }]
}
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function AdminDashboardLayout(props) {
   // console.log('Props /bookin/layout -> ', props)
   return (
      <html lang="es-ES" dir="ltr" className="h-full bg-red-500">
         <body className="h-full">
            <Providers>
               <AdminDashboardShell {...props} />
            </Providers>
         </body>
      </html>
   )
}
