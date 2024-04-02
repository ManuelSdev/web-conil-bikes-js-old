import './admin.css'
import { Inter } from 'next/font/google'
import React from 'react'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import AdminShell from '@/components/layouts/admin/AdminShell'
import { BookingBreadcrumb } from './dashboard/bookings/BookingBreadcrumb'

export async function generateStaticParams() {
   return [{ lang: 'es-ES' }]
}
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function AdminDashboardLayout(props) {
   console.log('Props /bookin/layout -> ', props.params)
   return (
      <html lang="es-ES" dir="ltr" className="h-full bg-red-500">
         <body className="h-full">
            <ReduxProviderWrapper>
               <AdminShell {...props} />
            </ReduxProviderWrapper>
         </body>
      </html>
   )
}
