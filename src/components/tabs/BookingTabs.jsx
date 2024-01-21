'use client'
import React from 'react'

import {
   BuildingOfficeIcon,
   CreditCardIcon,
   UserIcon,
   IdentificationIcon,
} from '@heroicons/react/20/solid'
import Data from './DualColumnData'
import DualColumnData from './DualColumnData'
import { mappedBookingState } from '@/utils/app/functions'
import { format } from 'date-fns'
import BookingBikesTab from './BookingBikesTab'
import { TabGroup, TabList, TabPanels } from './tabs'
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

const tabs = [
   { name: 'Datos', icon: IdentificationIcon },
   { name: 'Bicicletas', icon: BuildingOfficeIcon },
]

export default function BookingTabs({ bookingData, bikes }) {
   //console.log('bikes -> ', bikes)
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
   //console.log('----------------> '))
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
      <TabGroup>
         <TabList tabs={tabs} />
         <TabPanels
            panels={[
               <Data key={0} dataList={dataList} listHeader={listHeader} />,
               <BookingBikesTab key={1} bikes={bikes} />,
            ]}
         />
      </TabGroup>
   )
}
