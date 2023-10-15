// @ts-nocheck

import { cn } from '@/utils/app/functions'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

const TabGroup = ({ className, ...props }) => (
   <Tab.Group>
      <div className={cn('hidden sm:block', className)} {...props} />
   </Tab.Group>
)

const TabList = ({
   className,
   tabs,
   buttonClassName,
   iconClassName,
   ...props
}) => (
   <Tab.List className="border-b border-gray-200" aria-label="Tabs">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
         {tabs.map((tab) => (
            <Tab as={Fragment} key={tab.name}>
               {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                     className={cn(
                        'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium outline-none',
                        {
                           'border-indigo-500 text-indigo-600': selected,
                           'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                              !selected,
                        },
                        buttonClassName
                     )}
                  >
                     <tab.icon
                        className={cn(
                           '-ml-0.5 mr-2 h-5 w-5',
                           {
                              'text-indigo-500': selected,
                              'text-gray-400 group-hover:text-gray-500':
                                 !selected,
                           },
                           iconClassName
                        )}
                        aria-hidden="true"
                     />
                     <span>{tab.name}</span>
                  </button>
               )}
            </Tab>
         ))}
      </nav>
   </Tab.List>
)

const TabPanels = ({ className, panels, panelsClassname, ...props }) => (
   <Tab.Panels className={cn('mt-2', className)}>
      {panels.map((panel, idx) => (
         <Tab.Panel
            key={idx}
            className={cn(
               'rounded-xl bg-white p-3',
               'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
               panelsClassname
            )}
         >
            {' '}
            {panel}
         </Tab.Panel>
      ))}
   </Tab.Panels>
)

export { TabGroup, TabList, TabPanels }
