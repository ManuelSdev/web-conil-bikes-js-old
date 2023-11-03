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
import { rangesList, sizesList } from '@/utils/app/appValues'
import Wrap from './Wrap'
import { capitalizeFirst } from '@/utils/app/functions'

export default function RangeSelect({ form, availableRanges, handleChange }) {
   // const segmentList = useSelector(selectDatabaseInfoSegmentList)

   const rangeInfo = (segmentList) => (range) => {
      let price
      segmentList.forEach((segment) => {
         if (selectedType == segment.modelType && range == segment.modelRange)
            price = segment.segmentPrice
      })
      return price ? `${price} €/día` : 'Gama no disponible'
   }

   return (
      <FormField
         control={form.control}
         name="range"
         render={({ field }) => (
            //   console.log('field -> ', field) ||
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
                     <Wrap
                        renderElem={(params) => {
                           params.rangesList.map((range) => {
                              const [engRange, spaRange] = range
                              return (
                                 <SelectItem
                                    disabled={
                                       availableRanges
                                          ? !availableRanges.includes(engRange)
                                          : true
                                    }
                                    key={engRange}
                                    value={engRange}
                                 >
                                    {`${capitalizeFirst(
                                       spaRange
                                    )} - ${rangeInfo(params.segmentList)(
                                       engRange
                                    )}`}
                                 </SelectItem>
                              )
                           })
                        }}
                     />
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
