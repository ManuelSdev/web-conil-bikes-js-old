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
import { da, de } from 'date-fns/locale'
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
   ...props
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
   console.log('form values @->', form.getValues())
   console.log('form @->', form)

   const [
      triggerType,
      {
         data: availableTypes,
         isFetching: isLoadingTypes,
         isSuccess: isSuccessTypes,
         unsubscribe: unsubscribeTypes,
      },
      lastPromiseInfoTypes,
   ] = useLazyGetAvailableTypesQuery()

   //console.log('availableTypes IN BikeFilters @->', availableTypes)

   const [
      triggerRange,
      { data: availableRanges, isFetching: isLoadingRange },
      lastPromiseInfoRanges,
   ] = useLazyGetAvailableRangesQuery()

   const handleClick = (ev) => {
      setStep(1)
      //resetBikeForm()
   }
   const handleSizeChange = (field) => (selectedSizeValue) => {
      field.onChange(selectedSizeValue)
      // form.reset()
      // setBikeForm({ ...form, size: lastSelectedSize })
      //console.log('## CALL getAvailableSizesInRange FROM BikeFilters ##')

      triggerType({ dateRange, size: selectedSizeValue })
   }

   const handleType = (field) => (selectedTypeValue) => {
      console.log('field -> ', field)
      field.onChange(selectedTypeValue)
      //  updateBikeForm({ type: selectedTypeValue })
      triggerRange({ dateRange, size, type: selectedTypeValue })
   }

   const handleRange = (field) => (selectedRangeValue) => {
      console.log('selectedRangeValue -> ', selectedRangeValue)
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
            //   className="space-y-6 sm:grid sm:grid-cols-4 sm:isLoadingSizes-4 sm:space-y-0"
            className="gap-6 space-y-6 sm:flex sm:justify-center sm:space-y-0"
         >
            <SizeSelect
               // className="sm:grow"
               className="sm:min-w-[260px]"
               form={form}
               selectedSize={size}
               handleChange={handleSizeChange}
               // isLoading={isLoadingSizes}
               //     LoadingLabel={LoadingLabel}
               availableSizes={availableSizes}
               {...props}
            />
            <TypeSelect
               disabled
               // className="sm:grow"
               className="sm:min-w-[100px]"
               form={form}
               selectedSize={size}
               selectedType={type}
               handleChange={handleType}
               isLoadingTypes={isLoadingTypes}
               //   LoadingLabel={LoadingLabel}
               availableTypes={availableTypes}
            />
            <RangeSelect
               disabled
               // className="sm:grow"
               className="sm:min-w-[165px]"
               segmentList={segmentList}
               form={form}
               selectedType={type}
               selectedRange={range}
               handleChange={handleRange}
               isLoadingTypes={isLoadingTypes}
               isLoadingRange={isLoadingRange}
               //  LoadingLabel={LoadingLabel}
               availableRanges={availableRanges}
            />
            {renderShowBikesButton({
               dateRange,
               size,
               type,
               range,
               className: 'sm:self-end',
            })}
         </form>
      </Form>
   )
}
