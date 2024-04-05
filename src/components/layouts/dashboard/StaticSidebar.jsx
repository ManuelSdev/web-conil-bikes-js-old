import React from 'react'
import Sidebar from './sidebar'
import { cn } from '@/utils/app/functions'

export default function StaticSidebar({ sidebarContent, className }) {
   return (
      <div
         className={cn(
            'hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col',
            className
         )}
      >
         {/* Sidebar component, swap this element with another sidebar if you like */}
         <Sidebar sidebarContent={sidebarContent} />
      </div>
   )
}
