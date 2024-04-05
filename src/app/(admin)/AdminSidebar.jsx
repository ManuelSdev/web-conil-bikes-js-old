import React from 'react'
import {
   SidebarWrapper,
   Sidebar,
   SidebarLogoWrapper,
   SidebarLogo,
   SidebarNav,
   SidebarList,
   SidebarItems,
   SidebarItemIcon,
} from '../../components/layouts/dashboard/sidebar'

//import { SidebarLink, SidebarIconWrapper } from './SidebarLink'

import {
   Bars3Icon,
   BellIcon,
   CalendarIcon,
   ChartPieIcon,
   Cog6ToothIcon,
   DocumentDuplicateIcon,
   FolderIcon,
   HomeIcon,
   UsersIcon,
   XMarkIcon,
} from '@heroicons/react/24/outline'
import SidebarLink from '../../components/layouts/dashboard/SidebarLink'
import SidebarIconWrapper from '../../components/layouts/dashboard/SidebarIcon'

export default function AdminSidebar() {
   const primary = [
      {
         name: 'Reservas',
         href: '/dashboard/bookings/calendar',
         icon: HomeIcon,
         currentPath: '/dashboard/bookings',
      },
      {
         name: 'Bicicletas',
         href: '/dashboard/bikes',
         icon: UsersIcon,
         currentPath: '/dashboard/bikes',
      },
      {
         name: 'Usuarios',
         href: '/dashboard/users/new',
         icon: FolderIcon,
         currentPath: '/dashboard/users',
      },
      {
         name: 'Calendario',
         href: '#',
         icon: CalendarIcon,
         currentPath: 'false',
      },
      {
         name: 'Administración',
         href: '#',
         icon: DocumentDuplicateIcon,
         currentPath: 'false',
      },
      { name: 'Reports', href: '#', icon: ChartPieIcon, currentPath: 'false' },
   ]
   return (
      <SidebarWrapper>
         <Sidebar>
            <SidebarLogoWrapper>
               <SidebarLogo />
            </SidebarLogoWrapper>
            <SidebarNav>
               <SidebarList>
                  {primary.map((item, idx) => (
                     <SidebarLink
                        href={item.href}
                        key={idx}
                        currentPath={item.currentPath}
                     >
                        <item.icon className=" h-6 w-6" aria-hidden="true" />

                        {item.name}
                     </SidebarLink>
                  ))}
               </SidebarList>
            </SidebarNav>
         </Sidebar>
      </SidebarWrapper>
   )
}
