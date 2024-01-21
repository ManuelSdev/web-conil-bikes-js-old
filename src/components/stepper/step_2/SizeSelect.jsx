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
import SpinnerLine from '@/components/common/SpinnerLine'

export default function SizeSelect({
   form,
   availableSizes,
   handleChange,
   isLoadingSizes,
   className,
}) {
   return (
      <FormField
         control={form.control}
         name="size"
         render={({ field }) => (
            //  //console.log('field -> ', field) ||
            <FormItem className={className}>
               <FormLabel>Talla</FormLabel>
               <Select
                  onValueChange={handleChange(field)}
                  defaultValue={field.value}
               >
                  <FormControl>
                     <SelectTrigger>
                        {isLoadingSizes ? (
                           <SpinnerLine />
                        ) : (
                           <SelectValue placeholder="Talla">
                              {field.value?.toUpperCase()}
                           </SelectValue>
                        )}
                     </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                     {sizesList.map((elem) => {
                        const [size, [min, max]] = elem
                        return (
                           <SelectItem
                              disabled={
                                 availableSizes
                                    ? !availableSizes.includes(size)
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
               {/* <FormDescription>
                  Selecciona una talla en función de tu altura
                  </FormDescription>*/}
               <FormMessage />
            </FormItem>
         )}
      />
   )
}
