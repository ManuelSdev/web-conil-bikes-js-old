'use client'
import React, { useEffect, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import NotifyBadge from '../notifyBadge/NotifyBadge'
import NotifyBadgeNumber from '../notifyBadge/NotifyBadgeNumber'
import NotifyBadgeSpanSr from '../notifyBadge/NotifyBadgeSpanSr'
import useDialogWindow from '@/components/common/useDialogWindow'
import {
   selectBikesByUnits,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { useSelector } from 'react-redux'
import AvailableBikeListHandlerTest from '../stepper/step_3/AvailableBikeListHandlerTest'
import SelectedBikesListHandler from '../stepper/step_1/SelectedBikesListHandler'
import clsx from 'clsx'
import { cn } from '@/utils/app/functions'
import DrawerMenu from '../drawer/DrawerMenu'
import { Button } from '../ui/button'
import Link from 'next/link'
import { format } from 'date-fns'
import { MoveRight } from 'lucide-react'
import { Separator } from '../ui/separator'
import { usePathname } from 'next/navigation'

export default function NotifyCart() {
   const { dialog, handleSetDialog } = useDialogWindow(null)
   const dateRange = useSelector(selectDateRange)
   const { from, to } = dateRange
   console.log('from', from)
   const bikesByUnits = useSelector(selectBikesByUnits)
   const bikesQuantity = bikesByUnits.length
   const [currentBikes, setCurrentBikes] = useState(0)
   const pathname = usePathname()

   //const bikesQuantity = 4
   useEffect(() => {
      setCurrentBikes(bikesQuantity)
   }, [])

   useEffect(() => {
      if (bikesQuantity > currentBikes) {
         handleSetDialog({ open: true })
      }
      if (bikesQuantity === 0) {
         handleSetDialog({ open: false })
      }
      setCurrentBikes(bikesQuantity)
   }, [bikesQuantity])

   useEffect(() => {
      handleSetDialog({ open: false })
   }, [pathname])

   return (
      <div
         className={cn({
            'fixed bottom-2 right-2': true,
            'hidden': !bikesQuantity,
         })}
      >
         <NotifyBadge onClick={() => handleSetDialog({ open: true })}>
            <ShoppingCart />
            <NotifyBadgeSpanSr />
            <NotifyBadgeNumber>{currentBikes}</NotifyBadgeNumber>
         </NotifyBadge>
         <DrawerMenu
            sheetTitle={'Mi reserva'}
            content={
               <div>
                  {from && to && (
                     <div className="flex justify-evenly py-5">
                        <div>{format(new Date(from), 'dd/MM/yyyy')}</div>
                        <MoveRight />
                        <div>{format(new Date(to), 'dd/MM/yyyy')}</div>
                     </div>
                  )}
                  <Separator />

                  <SelectedBikesListHandler />
                  <Separator />
                  <div className="flex flex-col gap-5 pt-5">
                     {' '}
                     <Button className="text-greenCorp">
                        <Link href="/bookingg/address">Continuars</Link>
                     </Button>
                     <Button
                        className="text-greenCorp"
                        onClick={() => handleSetDialog({ open: false })}
                     >
                        Cerrar
                     </Button>
                  </div>
               </div>
            }
            side={'right'}
            {...dialog}
         />
      </div>
   )
}
