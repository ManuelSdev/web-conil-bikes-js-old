'use client'

import { useState } from 'react'
import ModalSidebar from '../ModalSidebar'
import React from 'react'
import SiteAppBar from './SiteAppBar'
import IconCorpName from '../../svg/IconCorpName'
import { sidebarContent } from '@/custom/sidebarContent'

export default function SiteShell({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   return (
      <div>
         <ModalSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarContent={sidebarContent}
         />

         {/* Static sidebar for desktop
          <StaticSidebar sidebarContent={sidebarContent} />
         */}

         <div className="min-h-full">
            <SiteAppBar setSidebarOpen={setSidebarOpen} />

            <main>{children}</main>
            <footer></footer>
         </div>
      </div>
   )
}
