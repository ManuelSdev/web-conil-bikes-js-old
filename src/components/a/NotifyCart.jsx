'use client'
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import NotifyBadge from '../notifyBadge/NotifyBadge'
import NotifyBadgeNumber from '../notifyBadge/NotifyBadgeNumber'
import NotifyBadgeSpanSr from '../notifyBadge/NotifyBadgeSpanSr'
import DrawerMenu from '@/components/drawer/DrawerMenu'
import useDialogWindow from '@/components/common/useDialogWindow'

export default function NotifyCart() {
   const { dialog, handleSetDialog } = useDialogWindow(null)
   const bikesQuantity = 4
   return (
      <div className="fixed bottom-2 right-2">
         <NotifyBadge onClick={() => handleSetDialog({ open: true })}>
            <ShoppingCart />
            <NotifyBadgeSpanSr />
            <NotifyBadgeNumber>{bikesQuantity}</NotifyBadgeNumber>
         </NotifyBadge>
         <DrawerMenu content={<div>hola</div>} side={'right'} {...dialog} />
      </div>
   )
}
