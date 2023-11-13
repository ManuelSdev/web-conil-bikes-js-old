//@ts-nocheck
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form } from '@/components/ui/form'
import SizeSelect from './SizeSelect'
import React, { use } from 'react'
import { useSearchParams } from 'next/navigation'
import {
   useGetAvailableSizesQuery,
   useLazyGetAvailableRangesQuery,
   useLazyGetAvailableTypesQuery,
} from '@/lib/redux/apiSlices/bikeApi'
import { da } from 'date-fns/locale'
import TypeSelect from './TypeSelect'
import RangeSelect from './RangeSelect'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { urlParams } from '@/utils/app/functions'

const FormSchema = z.object({
   email: z
      .string({
         required_error: 'Please select an email to display.',
      })
      .email(),
})

export default function BikeFiltersForm({
   dateRange,
   availableSizes,
   segmentList,
   renderShowBikesButton,
   //form,
   // setStep,
}) {
   // console.log('============', form.getValues())
   // console.log('dateRange @->', a)
   /*
   const {
      data: availableSizes,
      isLoading: isLoadingSizes,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAvailableSizesQuery({ dateRange }, { skip: true })
*/
   const FormSchema = z.object({
      email: z
         .string({
            required_error: 'Please select an email to display.',
         })
         .email(),
   })

   const form = useForm({ resolver: zodResolver(FormSchema) })
   const { size, type, range } = form.getValues()
   const [
      triggerType,
      {
         data: availableTypes,
         isLoading: isLoadingTypes,
         isSuccess: isSuccessTypes,
         unsubscribe: unsubscribeTypes,
      },
      lastPromiseInfoTypes,
   ] = useLazyGetAvailableTypesQuery()

   //console.log('availableTypes IN BikeFilters @->', availableTypes)

   const [
      triggerRange,
      { data: availableRanges, isLoading: isLoadingRange },
      lastPromiseInfoRanges,
   ] = useLazyGetAvailableRangesQuery()

   const handleClick = (ev) => {
      setStep(1)
      //resetBikeForm()
   }
   const handleSizeChange = (field) => (selectedSizeValue) => {
      field.onChange(selectedSizeValue)
      // setBikeForm({ ...form, size: lastSelectedSize })
      //console.log('## CALL getAvailableSizesInRange FROM BikeFilters ##')

      triggerType({ dateRange, size: selectedSizeValue })
   }

   const handleType = (field) => (selectedTypeValue) => {
      field.onChange(selectedTypeValue)
      //  updateBikeForm({ type: selectedTypeValue })
      triggerRange({ dateRange, size, type: selectedTypeValue })
   }

   const handleRange = (field) => (selectedRangeValue) => {
      field.onChange(selectedRangeValue)
      //updateBikeForm({ range: selectedRangeValue })
      //  setBikeForm({ ...form, range: lastSelectedRange })
      // triggerBike({...strDateRange,size,type,range:lastSelectedRange})
   }

   const onSubmit = (data, event) => {
      event.preventDefault()
      // setStep(1)
   }
   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
         >
            <SizeSelect
               form={form}
               selectedSize={size}
               handleChange={handleSizeChange}
               // isLoading={isLoadingSizes}
               //     LoadingLabel={LoadingLabel}
               availableSizes={availableSizes}
            />
            <TypeSelect
               form={form}
               selectedSize={size}
               selectedType={type}
               handleChange={handleType}
               isLoading={isLoadingTypes}
               //   LoadingLabel={LoadingLabel}
               availableTypes={availableTypes}
            />
            <RangeSelect
               segmentList={segmentList}
               form={form}
               selectedType={type}
               selectedRange={range}
               handleChange={handleRange}
               isLoading={isLoadingRange}
               //  LoadingLabel={LoadingLabel}
               availableRanges={availableRanges}
            />
            {renderShowBikesButton({ dateRange, size, type, range })}
         </form>
      </Form>
   )
}
