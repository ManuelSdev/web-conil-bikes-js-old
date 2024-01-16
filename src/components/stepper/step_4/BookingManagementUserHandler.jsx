import React, { useEffect, useState } from 'react'
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
import Step from '../Step'

const FormSchema = z.object({
   address: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
   delivery: z.boolean(),
   pickup: z.boolean(),
})

export default function BookingManagementUserHandler({ setStep, ...props }) {
   console.log('BookingManagementUserHandler @@@->')
   const dispatch = useDispatch()

   /** BookingManagementForm **/
   const bookingManagement = useSelector(selectBookingManagement)

   const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         ...bookingManagement,
      },
   })

   useEffect(() => {
      //console.log('useEffect bookingManagement ->', bookingManagement)
      //  form.setValue('address', bookingManagement.address)
      //  form.setValue('delivery', bookingManagement.delivery)
      //  form.setValue('pickup', bookingManagement.pickup)
      return () => {
         //Si pongo esto en el cuerpo del componente no pilla los valores....?¿
         const { address, delivery, pickup } = form.getValues()
         dispatch(bookingManagementSelected({ address, delivery, pickup }))
      }
   }, [])

   const renderNextButton = () => (
      <Button
         disabled={!form.getValues().address}
         onClick={() => {
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
      <Step
         renderNextButton={renderNextButton}
         renderPrevButton={renderPrevButton}
         {...props}
      >
         <BookingManagementStep
            form={form}
            renderNextButton={renderNextButton}
            renderPrevButton={renderPrevButton}
         />
      </Step>
   )
}
