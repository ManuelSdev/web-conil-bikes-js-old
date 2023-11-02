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

const FormSchema = z.object({
   email: z
      .string({
         required_error: 'Please select an email to display.',
      })
      .email(),
})

export default function BikeFilters({ dateRange, availableBikeSizes }) {
   const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
   })
   const { size, type, range } = form.getValues()
   // console.log('============', form.getValues())
   // console.log('dateRange @->', a)

   const {
      data: availableSizes,
      isLoading: isLoadingSizes,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAvailableSizesQuery({ dateRange }, { skip: true })

   const [
      triggerType,
      {
         data: availableBikeTypes,
         isLoading: isLoadingTypes,
         isSuccess: isSuccessTypes,
         unsubscribe: unsubscribeTypes,
      },
      lastPromiseInfoTypes,
   ] = useLazyGetAvailableTypesQuery()

   console.log('availableBikeTypes IN BikeFilters @->', availableBikeTypes)

   const [
      triggerRange,
      { data: availableRanges, isLoading: isLoadingRange },
      lastPromiseInfoRanges,
   ] = useLazyGetAvailableRangesQuery()

   const handleClick = (ev) => {
      setStep(1)
      //resetBikeForm()
   }
   const handleSizeChange = (field) => (value) => {
      field.onChange(value)
      // setBikeForm({ ...form, size: lastSelectedSize })
      console.log('## CALL getAvailableBikeSizesInRange FROM BikeFilters ##')

      triggerType({ dateRange, size: value })
   }

   const handleType = (event) => {
      const lastSelectedType = event.target.value
      updateBikeForm({ type: lastSelectedType })
      triggerRange({ ...strDateRange, size, type: lastSelectedType })
   }

   const handleRange = (event) => {
      const lastSelectedRange = event.target.value
      updateBikeForm({ range: lastSelectedRange })
      //  setBikeForm({ ...form, range: lastSelectedRange })
      // triggerBike({...strDateRange,size,type,range:lastSelectedRange})
   }

   const onSubmit = (data) => console.log(data)
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
               isLoading={isLoadingSizes}
               //     LoadingLabel={LoadingLabel}
               availableBikeSizes={availableBikeSizes}
            />
            <TypeSelect
               form={form}
               selectedSize={size}
               selectedType={type}
               handleChange={handleType}
               isLoading={isLoadingTypes}
               //   LoadingLabel={LoadingLabel}
               availableBikeTypes={availableBikeTypes}
            />
            {/*<Button type="submit">Submit</Button> */}
         </form>
      </Form>
   )
}
