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

export default function SiteShell(props) {
   return (
      <div className="min-h-full">
         <SiteAppBar />
         {/* <div className="h-slimTopAppBar w-full md:h-fatTopAppBar" />*/}
         <div className="bg-dark-400">
            <SiteContainer {...props} />
         </div>

         <Footer />
      </div>
   )
}
