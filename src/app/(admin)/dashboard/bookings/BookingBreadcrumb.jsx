'use client'
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ChevronRight } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'

export function BookingBreadcrumb() {
   const path = usePathname()
   const pathArray = getPathArray(path)
   const map = {
      dashboard: 'Inicio',
      bookings: 'Reservas',
      new: 'Nueva reserva',
      date: 'Fecha',
   }
   const array = pathArray.map((item, idx) => {
      const href = pathArray.slice(0, idx + 1).join('/')
      const name = map[item]
      return { [item]: { href, name } }
   })
   console.log('Params /booking/breadcrumb -> ', array)
   return (
      <Breadcrumb>
         <BreadcrumbList>
            {array.map((item, idx) => {
               const key = Object.keys(item)[0]
               const { href, name } = item[key]
               return idx < array.length - 1 ? (
                  <>
                     <BreadcrumbItem key={key}>
                        <BreadcrumbLink href={href}>{name}</BreadcrumbLink>{' '}
                     </BreadcrumbItem>
                     <BreadcrumbSeparator>
                        <ChevronRight size={14} />
                     </BreadcrumbSeparator>
                  </>
               ) : (
                  <BreadcrumbItem key={key}>
                     <BreadcrumbPage>{name}</BreadcrumbPage>
                  </BreadcrumbItem>
               )
            })}
         </BreadcrumbList>
      </Breadcrumb>
   )
}

function getPathArray(path) {
   const pathArray = path.split('/')
   pathArray.shift()
   return pathArray
}
/*

      <BreadcrumbItem>
               <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
               <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
               <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
               <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
               <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>

               */
