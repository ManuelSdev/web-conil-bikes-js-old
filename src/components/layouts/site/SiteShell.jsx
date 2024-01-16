'use client'

import { useState } from 'react'
import ModalSidebar from '../ModalSidebar'
import React from 'react'
import SiteAppBar from './SiteAppBar'
import IconCorpName from '../../svg/IconCorpName'
import { sidebarContent } from '@/custom/sidebarContent'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import SiteContainer from './SiteContainer'
import Footer from './Footer'

export default function SiteShell({ children }) {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   return (
      <div>
         {/* Static sidebar for desktop
          <StaticSidebar sidebarContent={sidebarContent} />
         */}

         <div className="min-h-full">
            <SiteAppBar setSidebarOpen={setSidebarOpen} />
            <div className="h-slimTopAppBar w-full md:h-fatTopAppBar" />
            <main className="">
               <SiteContainer> {children}</SiteContainer>{' '}
            </main>
            <footer>
               <Footer />
            </footer>
         </div>
      </div>
   )
}
