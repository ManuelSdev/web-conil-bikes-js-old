import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'

import React from 'react'

export default function SelectPageSize({ onValueChange }) {
   return (
      <Select onValueChange={onValueChange}>
         <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Mostrar 10" />
         </SelectTrigger>
         <SelectContent>
            <SelectItem value={10}>Mostrar 10</SelectItem>
            <SelectItem value={20}>Mostrar 20</SelectItem>
            <SelectItem value={40}>Mostrar 40</SelectItem>
         </SelectContent>
      </Select>
   )
}
