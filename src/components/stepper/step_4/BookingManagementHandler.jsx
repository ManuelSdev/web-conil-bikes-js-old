'use client'
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
import { BookingManagementForm } from './BookingManagementForm'
import Link from 'next/link'

const FormSchema = z.object({
   address: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
   delivery: z.boolean(),
   pickup: z.boolean(),
})

export default function BookingManagementHandler({ setStep, ...props }) {
   //console.log('BookingManagementUserHandler @@@->')
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
      <Link href="/bookingg/resume">
         {' '}
         <Button
            disabled={!form.getValues().address}
            className="text-greenCorp"
         >
            continuar
         </Button>
      </Link>
   )
   const renderPrevButton = () => (
      <Button className="text-greenCorp">atrás</Button>
   )
   return (
      <BookingManagementForm
         form={form}
         renderNextButton={renderNextButton}
         renderPrevButton={renderPrevButton}
      />
   )
}
