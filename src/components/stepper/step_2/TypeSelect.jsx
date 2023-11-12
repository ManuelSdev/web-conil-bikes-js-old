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
import { sizesList, typesList } from '@/utils/app/appValues'
import { capitalizeFirst } from '@/utils/app/functions'

export default function TypeSelect({ form, availableTypes, handleChange }) {
   // console.log('availableTypes IN TypeSelect @->', availableTypes)

   return (
      <FormField
         control={form.control}
         name="type"
         render={({ field }) => (
            <FormItem>
               <FormLabel>Email</FormLabel>
               <Select
                  onValueChange={handleChange(field)}
                  defaultValue={field.value}
               >
                  <FormControl>
                     <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                     </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                     {typesList.map((type) => {
                        const [engType, spaType] = type
                        return (
                           <SelectItem
                              disabled={
                                 availableTypes
                                    ? !availableTypes.includes(engType)
                                    : true
                              }
                              key={engType}
                              value={engType}
                           >
                              {capitalizeFirst(spaType)}
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
