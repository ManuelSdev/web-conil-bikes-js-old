import React from 'react'
import {
   BarHeader,
   BarNav,
   BarLogoMenuBlock,
   BarItems,
   BarRightBlock,
} from '@/components/layouts/dashboard/appBar/appBar'
import MenuButton from '../../components/layouts/dashboard/appBar/MenuButton'
import Link from 'next/link'
import IconCorpLogo from '@/components/svg/IconCorpLogo'
import SearchUserFormHandler from '../../components/layouts/admin/SearchUserFormHandler'
import { CircleUserRound } from 'lucide-react'
import { ProgressBar, ProgressBarProvider } from 'react-transition-progress'
export default function AdminBar() {
   return (
      <BarHeader>
         <BarNav>
            <BarLogoMenuBlock>
               <MenuButton />
               <Link className="LOGO block lg:hidden " href="/">
                  <IconCorpLogo className="h-12 w-12 border-2" />
               </Link>
            </BarLogoMenuBlock>
            <BarItems>
               <SearchUserFormHandler className={'relative flex flex-1'} />
            </BarItems>

            <BarRightBlock>
               <CircleUserRound className="text-greenCorp" />
            </BarRightBlock>
         </BarNav>
      </BarHeader>
   )
}
