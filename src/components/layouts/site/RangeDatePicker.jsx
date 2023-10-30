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
import DatePicker from '@/components/datepicker/DatePicker'

const FROM = 'from'
const TO = 'to'
const urlParams = (obj) => new URLSearchParams(obj)

export default function RangeDatePicker() {
   const [open, setopen] = useState(false)
   const [dateRange, setDateRange] = useState({ from: '', to: '' })
   const { from, to } = dateRange
   const handleSelect = (picker) => (selectedDate) => {
      setDateRange({ ...dateRange, [picker]: selectedDate })
   }
   console.log(open)
   return (
      <div>
         <DatePicker date={from} handleSelect={handleSelect(FROM)} />
         <DatePicker date={to} handleSelect={handleSelect(TO)} />
      </div>
   )
}
