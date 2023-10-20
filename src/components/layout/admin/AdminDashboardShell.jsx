'use client'

import { useState } from 'react'

import ModalSidebar from '../ModalSidebar'
import StaticSidebar from '../StaticSidebar'
import React from 'react'
import { sidebarContent } from '@/custom/sidebarContent'
import AdminAppBar from './AdminAppBar'

export default function AdminDashboardShell({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   return (
      <div>
         <ModalSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarContent={sidebarContent}
         />

         {/* Static sidebar for desktop */}
         <StaticSidebar sidebarContent={sidebarContent} />

         <div className="lg:pl-72">
            <AdminAppBar setSidebarOpen={setSidebarOpen} />
            <main className="py-10">
               <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
         </div>
      </div>
   )
}
