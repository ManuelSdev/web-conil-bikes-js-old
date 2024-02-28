import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CalendarHandlerUrl from '@/components/calendar/CalendarHandlerUrl'
import Card from '@/components/layouts/Card'
import { cn } from '@/utils/app/functions'
import Test from './Test'

const cardProps = {
   //className: 'max-w-[334px]',
   // className: 'col-span-4',
   cardTitle: 'Calendario de reservas',
   // cardDescription: 'Hin reverse chronological order.',
}

export default function BookingsPageTabs({
   bookingDates,
   className,
   ...props
}) {
   return (
      <Tabs defaultValue="calendar" className={cn('TABS w-full', className)}>
         <TabsList className="grid w-full max-w-[400px] grid-cols-2">
            <TabsTrigger value="calendar">Calendario</TabsTrigger>
            <TabsTrigger value="today">Hoy</TabsTrigger>
         </TabsList>
         <TabsContent value="calendar" className="flex justify-center">
            <Card {...cardProps}>
               <CalendarHandlerUrl bookingDates={bookingDates} />
            </Card>
         </TabsContent>
         <TabsContent value="today">
            <Test />
         </TabsContent>
      </Tabs>
   )
}
