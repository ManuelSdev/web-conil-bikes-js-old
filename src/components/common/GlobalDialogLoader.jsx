'use client'
import { Button } from '@/components/ui/button'
import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SpinnerRing from './SpinnerRing'
import BikeWheel from '../svg/BikeWheel'
import { useSelector } from 'react-redux'
import { selectAppIsLoadingData } from '@/lib/redux/slices/appConfigSlice'

export function GlobalDialogLoader({ open, onOpenChange, spinner = true }) {
   const isLoading = useSelector(selectAppIsLoadingData)
   return (
      <Dialog
         //   defaultOpen={true}
         open={isLoading}
         onOpenChange={onOpenChange}
      >
         <DialogContent
            closeIcon={false}
            className="border-0 bg-transparent shadow-none duration-0 focus:outline-none	focus-visible:outline-none sm:max-w-md"
         >
            <div className={'mx-auto'}>
               {spinner ? <SpinnerRing /> : <BikeWheel />}
            </div>
         </DialogContent>
      </Dialog>
   )
}
