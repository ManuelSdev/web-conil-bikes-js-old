'use client'

import { useState } from 'react'
//import LogoCorp from '@/public/corpName.svg'
import AppBar from './AppBar'
import ModalSidebar from './ModalSidebar'
import StaticSidebar from './StaticSidebar'
import React from 'react'
import SiteAppBar from './site/SiteAppBar'
import Image from 'next/image'
import IconCorpName from '../svg/IconCorpName'
//import IconCorpName from '../svg/IconCorpName'
//import LogoName from '../svg/LogoName'

export default function SiteShell({ children, sidebarContent }) {
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

            <main>
               <div className="min-h-[calc(100vh-64px)] w-full bg-home-main bg-cover bg-fixed bg-[70%] bg-no-repeat min-[900px]:bg-center">
                  <div className="flex h-full justify-center backdrop-brightness-75">
                     <IconCorpName
                        className={
                           'h-screen w-full max-w-[1000px] fill-[#D5FF40] stroke-white'
                        }
                        viewBox={'0 0 654 97'}
                     />
                  </div>
               </div>
               <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                  {children}
               </div>
            </main>
         </div>
      </div>
   )
}
//<LogoName className={'fill-[#D5FF40] stroke-white'} />
