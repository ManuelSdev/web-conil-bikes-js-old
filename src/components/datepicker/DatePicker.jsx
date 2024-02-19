'use client'

import { format } from 'date-fns'

import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/utils/app/functions'
import { useState } from 'react'
import { es } from 'date-fns/locale'

export default function DatePicker({
   date,
   handleSelect,
   label,
   className,
   isDisabled,
}) {
   const [open, setopen] = useState(false)
   const onSelect = (selectedDate) => {
      handleSelect(selectedDate)
      setopen(false)
   }
   return (
      <Popover onOpenChange={setopen} open={open}>
         <PopoverTrigger asChild>
            <Button
               disabled={isDisabled}
               variant={'outline'}
               className={cn(
                  //    'w-[280px] ',
                  'justify-start text-left font-normal',
                  !date && 'text-muted-foreground',
                  className
               )}
            >
               <CalendarIcon className="mr-2 h-4 w-4" />
               {date ? format(date, 'dd/MM/yyyy') : <span>{label}</span>}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0">
            <Calendar
               // disabled
               locale={es}
               mode="single"
               selected={date}
               onSelect={onSelect}
               initialFocus
            />
         </PopoverContent>
      </Popover>
   )
}
