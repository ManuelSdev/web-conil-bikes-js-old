'use client'

import { useState } from 'react'

import StaticSidebar from '@/components/StaticSidebar'
import AppBar from '@/components/AppBar'
import ModalSidebar from '@/components/ModalSidebar'

export default function DashboardLayout({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   return (
      <div>
         <ModalSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
         />

         {/* Static sidebar for desktop */}
         <StaticSidebar />

         <div className="lg:pl-72">
            <AppBar setSidebarOpen={setSidebarOpen} />
            <main className="py-10">
               <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
         </div>
      </div>
   )
}
