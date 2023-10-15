// @ts-nocheck
'use client'
import { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import React from 'react'
import {
   BuildingOfficeIcon,
   CreditCardIcon,
   UserIcon,
   UsersIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Example() {
   let categories = {
      Recent: [
         {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
         },
         {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
         },
      ],
      Popular: [
         {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
         },
         {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
         },
      ],
      Trending: [
         {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
         },
         {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
         },
      ],
   }
   const tabs = [
      { name: 'My Account', href: '#', icon: UserIcon },
      { name: 'Company', href: '#', icon: BuildingOfficeIcon },
      { name: 'Team Members', href: '#', icon: UsersIcon },
      { name: 'Billing', href: '#', icon: CreditCardIcon },
   ]

   return (
      <Tab.Group>
         <div className="hidden border-b border-gray-200 sm:block">
            <Tab.List className="-mb-px flex space-x-8" aria-label="Tabs">
               {tabs.map((tab) => (
                  <Tab as={Fragment} key={tab.name}>
                     {({ selected }) => (
                        /* Use the `selected` state to conditionally style the selected tab. */
                        <button
                           className={clsx(
                              'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium outline-none',
                              {
                                 'border-indigo-500 text-indigo-600': selected,
                                 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                                    !selected,
                              }
                           )}
                        >
                           <tab.icon
                              className={clsx('-ml-0.5 mr-2 h-5 w-5', {
                                 'text-indigo-500': selected,
                                 'text-gray-400 group-hover:text-gray-500':
                                    !selected,
                              })}
                              aria-hidden="true"
                           />
                           <span>{tab.name}</span>
                        </button>
                     )}
                  </Tab>
               ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
               {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel
                     key={idx}
                     className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                     )}
                  >
                     <ul>
                        {posts.map((post) => (
                           <li
                              key={post.id}
                              className="relative rounded-md p-3 hover:bg-gray-100"
                           >
                              <h3 className="text-sm font-medium leading-5">
                                 {post.title}
                              </h3>

                              <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                 <li>{post.date}</li>
                                 <li>&middot;</li>
                                 <li>{post.commentCount} comments</li>
                                 <li>&middot;</li>
                                 <li>{post.shareCount} shares</li>
                              </ul>

                              <a
                                 href="#"
                                 className={classNames(
                                    'absolute inset-0 rounded-md',
                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                 )}
                              />
                           </li>
                        ))}
                     </ul>
                  </Tab.Panel>
               ))}
            </Tab.Panels>
         </div>
      </Tab.Group>
   )
}
