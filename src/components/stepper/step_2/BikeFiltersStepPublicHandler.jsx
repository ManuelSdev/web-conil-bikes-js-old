'use client'
import React from 'react'
import BikeFiltersStep from './BikeFiltersStep'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BikeFiltersStepPublicHandler({
   segmentList,
   availableSizes,
   dateRange,
}) {
   const handleNext = () => {
      // setStep(1)
   }
   const handlePrev = () => {
      // router.push(`/booking?step=1`)
   }

   const renderShowBikesButton = ({ dateRange, size, type, range }) => (
      <Link
         href={`/booking?step=3&date=${dateRange}&size=${size}&type=${type}&range=${range}`}
      >
         <Button
            disabled={!range}
            //type="submit"
         >
            MOSTRAR BICICLETAS
         </Button>
      </Link>
   )
   const renderPrevButton = () => (
      <Link href={`/booking?step=0&date=${dateRange}`}>
         <Button className="text-greenCorp">atrás</Button>
      </Link>
   )
   return (
      <BikeFiltersStep
         availableSizes={availableSizes}
         segmentList={segmentList}
         dateRange={dateRange}
         handleNext={handleNext}
         handlePrev={handlePrev}
         disabled={true}
         renderShowBikesButton={renderShowBikesButton}
         renderPrevButton={renderPrevButton}
      />
   )
}
