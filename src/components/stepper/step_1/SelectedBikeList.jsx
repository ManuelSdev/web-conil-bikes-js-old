import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Bike } from 'lucide-react'
/*
 <Button onClick={() => setStep(2)}>Añadir bicicletas</Button>
 */
const people = [
   {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      imageUrl:
         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
   },
   {
      name: 'Michael Foster',
      email: 'michael.foster@example.com',
      imageUrl:
         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
   },
]
export default function SelectedBikeList({ setStep, bikes }) {
   return (
      <div>
         <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
               <li
                  key={person.email}
                  className="flex items-center justify-between gap-x-6 py-5"
               >
                  <div className="flex min-w-0 gap-x-4">
                     <div
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src={person.imageUrl}
                        alt=""
                     >
                        <Bike className="h-12 w-12" />
                     </div>
                     <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                           {person.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                           {person.email}
                        </p>
                     </div>
                  </div>
                  <a
                     href={person.href}
                     className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                     View
                  </a>
               </li>
            ))}
         </ul>
         <a
            href="#"
            className="flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
         >
            View all
         </a>
      </div>
   )
}
