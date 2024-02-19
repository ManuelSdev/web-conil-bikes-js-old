'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useSelector } from 'react-redux'
import { selectBookingData } from '@/lib/redux/slices/bookingFormSlice'
import { useLazyCreateCookieQuery } from '@/lib/redux/apiSlices/cookieApi'
import { useCreateBookingMutation } from '@/lib/redux/apiSlices/bookingApi'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'

import BookingResume from './BookingResume'
import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react'
import useDialogWindow from '@/components/common/useDialogWindow'
import { DialogWindow } from '@/components/common/DialogWindow'
import SpinnerRing from '@/components/common/SpinnerRing'
import { DialogLoader } from '@/components/common/DialogLoader'
import { useRouter } from 'next/navigation'

export default function BookingResumeHandler({ setStep, user, ...props }) {
   const [triggerCookie] = useLazyCreateCookieQuery()
   const router = useRouter()
   const storedBookingData = useSelector(selectBookingData)
   const { dialog, handleSetDialog } = useDialogWindow(null)
   const bookingResumeData = {
      ...user,
      ...storedBookingData,
      isAdmin: true,
   }
   const {
      bikes,
      appUserId: userId,
      isAdmin,
      dateRange,
      address,
      totalPrice: price,
      email,
      delivery,
      pickup,
      duration,
   } = bookingResumeData

   const strDateRange = dateRangeISOStringObjToString(dateRange)
   console.log('bookingResumeData ->', bookingResumeData)
   const queryData = {
      bikes,
      userId,
      isAdmin,
      dateRange: strDateRange,
      address,
      price,
      email,
      delivery,
      pickup,
      duration,
   }

   const [
      createBooking,
      {
         // status,
         //  isUninitialized,
         isLoading,
         isSuccess,
         data,
         isError,
         error,
         reset,
      },
   ] = useCreateBookingMutation({ fixedCacheKey: 'createBooking-key' })
   console.log('userId ->', userId)
   const handleSubmit = async (event) => {
      event.preventDefault()

      try {
         const res = await createBooking(queryData).unwrap()
         console.log('res ->', res)
         /*  const desc = (
            <span>
               Te hemos enviado un correo electrónico a{' '}
               <span className="font-semibold">{email}</span> con los detalles
               de tu reserva
            </span>
         )*/
         handleSetDialog({
            open: true,
            title: 'Tu reserva ha sido registrada',
            description: 'desc',
            closeText: 'Aceptar',
            onOpenChange: (bool) => router.push('/'),
         })
      } catch (error) {
         console.log('error ->', error)
         handleSetDialog({
            open: true,
            title: 'Ha ocurrido un error',
            description:
               'No se ha podido registrar tu reserva. Por favor, inténtalo de nuevo pasados unos minutos.',
            closeText: 'Aceptar',
            onOpenChange: (bool) => router.push('/'),
         })
      }
   }

   const renderPrevButton = (className) => (
      <Button asChild variant="custom" className={className}>
         <Link href={'/bookingg/address'}>
            <ArrowLeft weight="bold" className="mr-2 h-4 w-4" />
            atrás
         </Link>
      </Button>
   )
   const renderSubmitButton = (className) => (
      <Button
         type="submit"
         variant="custom"
         className={className}
         onClick={handleSubmit}
      >
         CONFIRMAR RESERVA
      </Button>
   )
   console.log('isLoading ->', isSuccess)
   return (
      <div>
         <div>Hollaa</div>
         <div>aa {data}</div>
         <div>ee {isError}</div>
         <div>cc {isSuccess}</div>
         <div>cc {isLoading}</div>
         <DialogLoader open={isLoading} />
         <DialogWindow {...dialog} />

         <BookingResume
            renderPrevButton={renderPrevButton}
            renderSubmitButton={renderSubmitButton}
            {...bookingResumeData}
         />
      </div>
   )
}

function createBookingResumeCookie({ bikes, bookingManagement, dateRange }) {
   const bikesData = bikes.map((bike) => ({
      modelId: bike.modelId,
      bikeSize: bike.bikeSize,
   }))
   const managementData = { ...bookingManagement }
   const dateRangeData = { ...dateRange }
   const cookieValue = JSON.stringify({
      bikesData,
      managementData,
      dateRangeData,
   })
   return cookieValue
}
