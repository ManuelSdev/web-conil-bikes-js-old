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
import React, { useEffect } from 'react'
import { sizesList, typesList } from '@/utils/app/appValues'
import { capitalizeFirst } from '@/utils/app/functions'
import SpinnerLine from '@/components/common/SpinnerLine'

export default function TypeSelect({
   form,
   availableTypes,
   handleChange,
   isLoadingTypes,
   className,
   disabled,
}) {
   //console.log('isLoadingTypes IN TypeSelect @->', isLoadingTypes)

   useEffect(() => {
      isLoadingTypes && form.resetField('type')
   }, [isLoadingTypes])

   return (
      <FormField
         control={form.control}
         name="type"
         render={({ field }) => (
            <FormItem className={className}>
               <FormLabel>Tipo</FormLabel>
               <Select
                  onValueChange={handleChange(field)}
                  defaultValue={field.value}
               >
                  <FormControl>
                     <SelectTrigger>
                        {isLoadingTypes ? (
                           <SpinnerLine />
                        ) : field.value ? (
                           <SelectValue
                              //  aria-label={field.value}
                              placeholder="Tipo"
                           />
                        ) : (
                           'Tipo'
                        )}
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
               {/*   <FormDescription>
                  Selecciona una talla en función de tu altura
               </FormDescription>*/}
               <FormMessage />
            </FormItem>
         )}
      />
   )
}
