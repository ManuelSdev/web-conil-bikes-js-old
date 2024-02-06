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

export default function DrawerMenu({
   open,
   onOpenChange,
   sheetTitle,
   description,
   content,
   side,
   ...props
}) {
   return (
      <div>
         <Sheet open={open} onOpenChange={onOpenChange}>
            {/* <SheetTrigger>{trigger} aa</SheetTrigger>*/}
            <SheetContent className="lg:min-w-0 lg:max-w-sm" side={side}>
               <SheetHeader>
                  <SheetTitle>{sheetTitle}</SheetTitle>
                  {description && (
                     <SheetDescription>{description}</SheetDescription>
                  )}
                  {content}
               </SheetHeader>

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
