'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const user = {
   name: 'Tom Cook',
   email: 'tom@example.com',
   imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
   { name: 'Dashboard', href: '#', current: true },
   { name: 'Team', href: '#', current: false },
   { name: 'Projects', href: '#', current: false },
   { name: 'Calendar', href: '#', current: false },
   { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
   { name: 'Your Profile', href: '#' },
   { name: 'Settings', href: '#' },
   { name: 'Sign out', href: '#' },
]
LA
function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function SiteAppBar() {
   return (
      <header className="HEADER-1 fixed z-50 w-full bg-black">
         <nav className="NAV mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="HEADER-3 h-header flex items-center justify-between gap-8">
               {/**LOGO Y BOTONERA +MD */}
               <div className="HEADER-4 flex w-full items-center justify-between">
                  {/* LOGO */}
                  <div className="LOGO flex-shrink-0">
                     <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                        alt="Your Company"
                     />
                  </div>
                  {/**BOTONERA +md */}
                  <div className="BUTTONS hidden md:block">
                     <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                           <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                 item.current
                                    ? 'text-greenCorp bg-indigo-700 '
                                    : 'text-greenCorp  hover:bg-indigo-500 hover:bg-opacity-75',
                                 'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                           >
                              {item.name}
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
               {/* BOTONERA/Profile +md*/}
               <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                     <button
                        type="button"
                        className="relative rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                     >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                     </button>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   )
}
