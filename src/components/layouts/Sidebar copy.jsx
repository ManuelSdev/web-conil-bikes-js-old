import React from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}
const Mod = () => (
   <div className="fixed left-[calc(18rem-12px)] top-[calc(2rem-12px)]">
      <span className="inline-block h-6 w-6 overflow-hidden rounded-full bg-gray-100">
         <ChevronLeftIcon />
      </span>
   </div>
)
export default function Sidebar({ sidebarContent }) {
   const { primary, secondary } = sidebarContent
   return (
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
         <Mod />
         <div className="flex h-16 shrink-0 items-center">
            <img
               className="h-8 w-auto"
               src="https://tailwindui.com/img/logos/mark.svg?color=white"
               alt="Your Company"
            />
         </div>
         <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
               <li>
                  <ul role="list" className="-mx-2 space-y-1">
                     {primary.map((item) => (
                        <li key={item.name}>
                           <a
                              href={item.href}
                              className={classNames(
                                 item.current
                                    ? 'bg-indigo-700 text-white'
                                    : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                              )}
                           >
                              <item.icon
                                 className={classNames(
                                    item.current
                                       ? 'text-white'
                                       : 'text-indigo-200 group-hover:text-white',
                                    'h-6 w-6 shrink-0'
                                 )}
                                 aria-hidden="true"
                              />
                              {item.name}
                           </a>
                        </li>
                     ))}
                  </ul>
               </li>
               <li>
                  <div className="text-xs font-semibold leading-6 text-indigo-200">
                     Your items
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                     {secondary.map((item) => (
                        <li key={item.name}>
                           <a
                              href={item.href}
                              className={classNames(
                                 item.current
                                    ? 'bg-indigo-700 text-white'
                                    : 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                                 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                              )}
                           >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                 {item.initial}
                              </span>
                              <span className="truncate">{item.name}</span>
                           </a>
                        </li>
                     ))}
                  </ul>
               </li>
               <li className="mt-auto">
                  <a
                     href="#"
                     className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                  >
                     <Cog6ToothIcon
                        className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                        aria-hidden="true"
                     />
                     Settings
                  </a>
               </li>
            </ul>
         </nav>
      </div>
   )
}
