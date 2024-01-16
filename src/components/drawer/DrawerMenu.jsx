'use client'
import React from 'react'
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { CircleUserRound, Menu } from 'lucide-react'
import { Button } from '../ui/button'

export default function DrawerMenu({ open, onOpenChange, content, side }) {
   return (
      <div className="text-white">
         <Sheet open={open} onOpenChange={onOpenChange}>
            {/* <SheetTrigger>{trigger} aa</SheetTrigger>*/}
            <SheetContent side={side}>
               {content}
               {/* <SheetFooter>
                  <SheetClose asChild>
                     <Button>Save changes</Button>
                  </SheetClose>
   </SheetFooter>*/}
            </SheetContent>
         </Sheet>
      </div>
   )
}
