//@ts-nocheck
'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { sizesList } from '@/utils/app/appValues'

export default function SizeSelect({ form, avaiableBikeSizes }) {
   return (
      <FormField
         control={form.control}
         name="email"
         render={({ field }) => (
            <FormItem>
               <FormLabel>Email</FormLabel>
               <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
               >
                  <FormControl>
                     <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                     </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                     {sizesList.map((elem) => {
                        const [size, [min, max]] = elem
                        return (
                           <SelectItem
                              disabled={
                                 avaiableBikeSizes
                                    ? !avaiableBikeSizes.includes(size)
                                    : true
                              }
                              key={size}
                              value={size}
                           >
                              {`${size.toUpperCase()} - si mides entre ${min} y ${max} cm `}
                           </SelectItem>
                        )
                     })}
                  </SelectContent>
               </Select>
               <FormDescription>
                  Selecciona una talla en función de tu altura
               </FormDescription>
               <FormMessage />
            </FormItem>
         )}
      />
   )
}
