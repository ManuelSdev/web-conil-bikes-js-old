import React from 'react'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Breadcrumb({ pages }) {
   return (
      <nav className="flex" aria-label="Breadcrumb">
         <ol role="list" className="flex items-center space-x-4">
            <li>
               <div>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                     <HomeIcon
                        className="h-5 w-5 flex-shrink-0"
                        aria-hidden="true"
                     />
                     <span className="sr-only">Home</span>
                  </a>
               </div>
            </li>
            {pages.map((page, idx) => (
               <li key={page.name}>
                  <div className="flex items-center">
                     <ChevronRightIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                     />
                     {pages.length === idx + 1 ? (
                        <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                           {page.name}
                        </span>
                     ) : (
                        <Link
                           href={page.href}
                           className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                           aria-current={page.show ? 'page' : undefined}
                        >
                           {page.name}
                        </Link>
                     )}
                  </div>
               </li>
            ))}
         </ol>
      </nav>
   )
}
