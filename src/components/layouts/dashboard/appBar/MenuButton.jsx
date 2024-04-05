'use client'
import useDialogWindow from '@/components/common/useDialogWindow'
import DrawerMenu from '@/components/drawer/DrawerMenu'
import { Button } from '@/components/ui/button'
import React from 'react'
import { CircleUserRound, Menu } from 'lucide-react'
import MenuList from './MenuList'

export default function MenuButton() {
   const { dialog, handleSetDialog } = useDialogWindow(null)
   return (
      <div className=" lg:hidden">
         <Button size="icon" onClick={() => handleSetDialog({ open: true })}>
            <Menu className="text-greenCorp" />
         </Button>

         <DrawerMenu
            title={'Menu'}
            content={<MenuList />}
            side={'left'}
            {...dialog}
         />
      </div>
   )
}
