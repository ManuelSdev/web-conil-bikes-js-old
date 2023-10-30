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

const FROM = 'from'
const TO = 'to'

export default function RangeDatePicker() {
   const [date, setDate] = useState()
   const [open, setopen] = useState(false)
   const [dateRange, setDateRange] = useState({ from: '', to: '' })
   const { from, to } = dateRange
   const handleChange = (picker) => (newValue) => {
      setDateRange({ ...dateRange, [picker]: newValue })
      setopen(false)
   }
   console.log(open)
   return (
      <div>
         <Popover onOpenChange={setopen} open={open}>
            <PopoverTrigger asChild>
               <Button
                  variant={'outline'}
                  className={cn(
                     'w-[280px] justify-start text-left font-normal',
                     !from && 'text-muted-foreground'
                  )}
               >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {from ? format(from, 'PPP') : <span>Pick a date</span>}
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
               <Calendar
                  mode="single"
                  selected={from}
                  onSelect={handleChange(FROM)}
                  initialFocus
               />
            </PopoverContent>
         </Popover>
         <Popover>
            <PopoverTrigger asChild>
               <Button
                  variant={'outline'}
                  className={cn(
                     'w-[280px] justify-start text-left font-normal',
                     !to && 'text-muted-foreground'
                  )}
               >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {to ? format(to, 'PPP') : <span>Pick a date</span>}
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
               <Calendar
                  mode="single"
                  selected={to}
                  onSelect={handleChange(TO)}
                  initialFocus
               />
            </PopoverContent>
         </Popover>
      </div>
   )
}
