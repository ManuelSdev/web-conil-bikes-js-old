import React, { useState } from 'react'
import BookingManagementStep from './BookingManagementStep'
import { useDispatch, useSelector } from 'react-redux'
import {
   bookingManagementSelected,
   selectBookingManagement,
} from '@/lib/redux/slices/bookingFormSlice'
import { Button } from '@/components/ui/button'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const FormSchema = z.object({
   address: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
   delivery: z.boolean(),
   pickup: z.boolean(),
})

export default function BookingManagementUserHandler({ setStep }) {
   const dispatch = useDispatch()

   /** BookingManagementForm **/
   const bookingManagement = useSelector(selectBookingManagement)

   const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         ...bookingManagement,
      },
   })
   const { address, delivery, pickup } = form.getValues()

   const renderNextButton = () => (
      <Button
         disabled={!address}
         onClick={() => {
            // dispatch(bookingManagementSelected({ address, delivery, pickup }))
            setStep(5)
         }}
         className="text-greenCorp"
      >
         continuar
      </Button>
   )
   const renderPrevButton = () => (
      <Button onClick={() => setStep(1)} className="text-greenCorp">
         atrás
      </Button>
   )
   return (
      <BookingManagementStep
         form={form}
         renderNextButton={renderNextButton}
         renderPrevButton={renderPrevButton}
      />
   )
}
