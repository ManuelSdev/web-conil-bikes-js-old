import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClipboardList, Ellipsis } from 'lucide-react'
import { Bicycle } from '@phosphor-icons/react/dist/ssr'

import { format } from 'date-fns'
import { mappedBookingState } from '@/utils/app/functions'
import BasicCard from '@/components/BasicCard'
import { BikesTable } from './BikesTable'
import { Card, CardContent } from '@/components/ui/card'
import DualColumnData from './DualColumnData'
import BookingActions from './BookingActions'

export default function BookingPageTabs({ bookingData, bikes }) {
   const {
      email,
      price,
      dateRange,
      duration,
      delivery,
      pickup,
      address,
      state,
      bookingId,
      name,

      phone,
   } = bookingData
   console.log('----------------> ', bookingData)
   const [from, to] = dateRange
   const dataList = [
      ['Nombre', name],

      ['Correo eléctronico', email],
      ['Teléfono', phone],
      ['Dirección', address],
      [
         'Fecha',
         `Del ${format(new Date(from), 'dd/MM/yyyy')} al ${format(
            new Date(to),
            'dd/MM/yyyy'
         )} `,
      ],
      ['Duración', `${duration} ${duration === 1 ? 'día' : 'días'}`],
      ['Importe total', `${price} €`],
      ['Estado', mappedBookingState(state)],
      ['Entrega de bicicletas', delivery ? 'A domicilio' : 'En tienda'],
      ['Devolución de bicicletas', pickup ? 'A domicilio' : 'En tienda'],
   ]
   const listHeader = {
      title: `ID de reserva: ${bookingId}`,
      // info: 'Personal details and application.',
   }

   return (
      <BasicCard
         className="max-w-none"
         tittle={`Datos de la reserva con ID ${bookingId}`}
      >
         <Tabs defaultValue="details" className="">
            <TabsList>
               <TabsTrigger value="details">
                  <ClipboardList className="mr-2" /> Detalles
               </TabsTrigger>
               <TabsTrigger value="bikes">
                  <Bicycle className="mr-2" size={24} />
                  Bicicletas
               </TabsTrigger>
               <TabsTrigger value="actions">
                  <Ellipsis className="mr-2" />
                  Acciones
               </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="w-full">
               <BasicCard className="mt-8 max-w-none">
                  <DualColumnData dataList={dataList} />
               </BasicCard>
            </TabsContent>
            <TabsContent value="bikes">
               <BikesTable bikes={bikes} />
            </TabsContent>
            <TabsContent value="actions">
               <BookingActions booking={bookingData} />
            </TabsContent>
         </Tabs>
      </BasicCard>
   )
}
