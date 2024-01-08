import React from 'react'
import SiteContainer from './SiteContainer'
import IconCorpName from '@/components/svg/IconCorpName'
import Link from 'next/link'
import GoogleLocation from './GoogleLocation'
import { cn } from '@/utils/app/functions'

export default function FooterDesktop({ navigation, contact }) {
   return (
      <div className="hidden sm:block">
         <SiteContainer>
            <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-0">
               <IconCorpName
                  className={
                     ' w-full max-w-[1000px] fill-[#D5FF40] stroke-white '
                  }
                  viewBox={'0 0 654 97'}
               />
               <div></div>
               {navigation.map((item, index) => (
                  <div
                     key={index}
                     className={cn(
                        'md:flex md:justify-center',
                        item.props?.className
                     )}
                  >
                     <div>
                        {' '}
                        <div>{item.title}</div>
                        {item.subtitles.map((subtitle, index) => (
                           <div key={index}>
                              {' '}
                              <Link href={subtitle.href}> {subtitle.name}</Link>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}

               <div>
                  {contact.map((item, index) => (
                     <div key={index} className="flex">
                        <item.icon {...item.iconProps} />
                        <div className="ml-3">{item.text}</div>
                     </div>
                  ))}
               </div>

               <div className="hidden md:block"></div>
               <div
                  className={cn('col-span-2 md:col-span-3 ', ' pl-8  md:pl-16')}
               >
                  <GoogleLocation className="mt-3" />
               </div>
            </div>
         </SiteContainer>
      </div>
   )
}
