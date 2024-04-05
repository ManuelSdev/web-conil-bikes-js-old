import Link from 'next/link'
import React from 'react'
import { CircleUserRound } from 'lucide-react'

const navigation = [
   {
      name: 'Alquiler',
      href: '/booking',
      icon: CircleUserRound,
      pathname: ['/user/booking', '/booking'],
   },
   {
      name: 'Tienda',
      href: '/store',
      icon: CircleUserRound,
      pathname: ['/store'],
   },
   {
      name: 'Servicios',
      href: '/services',
      icon: CircleUserRound,
      pathname: ['/services'],
   },
   {
      name: 'Contacto',
      href: '/contact',
      icon: CircleUserRound,
      pathname: ['contact'],
   },
]
export default function MenuList() {
   return (
      <ul role="list" className="-mx-2 space-y-1">
         {navigation.map((item) => (
            <li key={item.name}>
               <Link href={item.href}>
                  <div className="flex gap-4 py-3">
                     <item.icon
                        className="h-6 w-6 shrink-0 text-gray-400"
                        aria-hidden="true"
                     />
                     {item.name}
                  </div>
               </Link>
            </li>
         ))}
      </ul>
   )
}
