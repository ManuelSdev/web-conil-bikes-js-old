import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import SiteAppBarLinks from './SiteAppBarLinks'
import IconCorpLogo from '@/components/svg/IconCorpLogo'
import Link from 'next/link'
import { CircleUserRound, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DrawerMenu from '@/components/drawer/DrawerMenu'

//console.log(<MapPin className="h-6 w-6" />)
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

export default function SiteAppBar() {
   return (
      <header className="HEADER-1 fixed z-50  w-full bg-black">
         <nav className="NAV mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="HEADER-3 flex h-slimTopAppBar items-center justify-between gap-8 md:h-fatTopAppBar">
               {/**LOGO Y BOTONERA +MD */}
               <div className="HEADER-4 flex w-full items-center justify-between">
                  {/* LOGO */}
                  <div className="flex-shrink-0">
                     <div className="flex items-center">
                        <div className=" md:hidden">
                           <DrawerMenu
                              navigation={navigation}
                              side="left"
                              trigger={
                                 <Button size="icon">
                                    <Menu className="text-greenCorp" />
                                 </Button>
                              }
                           />
                        </div>

                        <Link className="LOGO " href="/">
                           <IconCorpLogo className="h-12 w-12 border-2 md:h-20 md:w-20" />
                        </Link>
                     </div>
                  </div>

                  {/**BOTONERA +md */}
                  <SiteAppBarLinks />
               </div>
               {/* BOTONERA/Profile +md*/}
               <div>
                  <div className="ml-4 flex items-center md:ml-6 ">
                     <div className="hidden md:block">
                        <DrawerMenu
                           navigation={navigation}
                           side="right"
                           trigger={
                              <Button className="text-greenCorp ">
                                 <CircleUserRound
                                    className="mr-2 h-6 w-6 "
                                    //color="#D5FF40"
                                    aria-hidden="true"
                                 />
                                 Mi cuenta
                              </Button>
                           }
                        />
                     </div>
                     <div className=" md:hidden">
                        <DrawerMenu
                           navigation={navigation}
                           side="right"
                           trigger={
                              <Button className="text-greenCorp" size="icon">
                                 <CircleUserRound
                                    className="mr-2 h-6 w-6 "
                                    //color="#D5FF40"
                                    aria-hidden="true"
                                 />
                              </Button>
                           }
                        />
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   )
}
