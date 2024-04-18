'use client'
import { cn } from '@/utils/app/functions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SidebarLink = ({
   children,
   href,
   currentPath,
   className,
   currentClassName = 'bg-indigo-700 text-white',
   noCurrentClassName = 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
}) => {
   const path = usePathname()
   const isCurrent = path.includes(currentPath)
   /*
   console.log(
      'isCurrent -> ',
      isCurrent,
      'path -> ',
      path,
      'currentPath -> ',
      currentPath
   )
   */
   return (
      <li>
         <Link
            href={href}
            className={cn(
               isCurrent ? currentClassName : noCurrentClassName,
               'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
               className
            )}
         >
            {children}
         </Link>
      </li>
   )
}
export default SidebarLink
/*
const SidebarIconWrapper = ({
   Icon,
   className,
   currentPath,
   currentClassName = 'text-white',
   noCurrentClassName = 'text-indigo-200 group-hover:text-white',
}) => {
   const path = usePathname()
   const isCurrent = path.includes(currentPath)
   return (
      <Icon
         className={cn(
            isCurrent ? currentClassName : noCurrentClassName,
            'h-6 w-6 shrink-0',
            className
         )}
         aria-hidden="true"
      />
   )
}

export { SidebarLink, SidebarIconWrapper }
*/
