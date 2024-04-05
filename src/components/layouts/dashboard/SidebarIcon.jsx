'use client'
import { cn } from '@/utils/app/functions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const SidebarIconWrapper = ({
   Icon,
   className,
   currentPath,
   currentClassName = 'text-white',
   noCurrentClassName = 'text-indigo-200 group-hover:text-white',
   ...props
}) => {
   const path = usePathname()
   const isCurrent = path.includes(currentPath)
   return (
      <div
         className={cn(
            isCurrent ? currentClassName : noCurrentClassName,
            'h-6 w-6 shrink-0',
            className
         )}
         aria-hidden="true"
         {...props}
      />
   )
}
export default SidebarIconWrapper
