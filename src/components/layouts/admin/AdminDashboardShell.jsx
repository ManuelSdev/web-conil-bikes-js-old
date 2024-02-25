'use client'

import { useState } from 'react'

import ModalSidebar from '../ModalSidebar'
import StaticSidebar from '../StaticSidebar'
import React from 'react'
import { sidebarContent } from '@/custom/sidebarContent'
import AdminAppBar from './AdminAppBar'
import { Button } from '@/components/ui/button'

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

         <div className="bg-green-400 lg:pl-72">
            <AdminAppBar setSidebarOpen={setSidebarOpen} />
            <main className="py-10">
               <div className="px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between space-y-2">
                     <h2 className="text-3xl font-bold tracking-tight">
                        Dashboard
                     </h2>
                     <div className="flex items-center space-x-2">
                        <Button>Prueba</Button>
                        <Button>Prueba</Button>
                     </div>
                  </div>
                  {children}
               </div>
            </main>
         </div>
      </div>
   )
}
