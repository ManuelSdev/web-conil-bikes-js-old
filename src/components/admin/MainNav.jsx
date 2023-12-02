'use client'
import React from 'react'
import { cn } from '@/utils/app/functions'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import clsx from 'clsx'

export default function MainNav(className, ...props) {
   const segment = useSelectedLayoutSegment()
   //Si es distinto del segmento actual, se aplica la clase 'text-muted-foreground' que pone gris el texto
   const segmentClass = (link) =>
      clsx('text-sm font-medium transition-colors hover:text-primary', {
         'text-muted-foreground': segment !== link,
      })
   return (
      <nav
         className={cn('flex items-center space-x-4 lg:space-x-6', className)}
         {...props}
      >
         <Link href="/dashboard/user/new" className={segmentClass('new')}>
            Nuevo usuario
         </Link>
         <Link href="/dashboard/user/search" className={segmentClass('search')}>
            Buscar usuario
         </Link>
         <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
         >
            Products
         </Link>
         <Link
            href="/examples/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
         >
            Settings
         </Link>
         <p>Active segment: {segment}</p>
      </nav>
   )
}
