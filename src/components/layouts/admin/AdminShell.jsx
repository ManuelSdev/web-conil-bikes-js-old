'use client'

import { useState } from 'react'

import ModalSidebar from '../ModalSidebar'
import StaticSidebar from '../StaticSidebar'
import React from 'react'
import { sidebarContent } from '@/custom/sidebarContent'
import AdminAppBar from './AdminAppBar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AdminShell({ children, ...props }) {
   //   console.log('AdminDashboardShell @@@@@@@@@@@@@@@@ ', props)
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
            <main className="py-10">{children}</main>
         </div>
      </div>
   )
}
