import React from 'react'
import UserCard from './UserCard'
import { format } from 'date-fns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import DualColumnData from '../../../bookings/[bookingId]/details/DualColumnData'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import BasicCard from '@/components/BasicCard'
import { ClipboardList, BookMarked, Ellipsis } from 'lucide-react'
import { BookingsTable } from '../../../bookings/calendar/[date]/bookingsTable/BookingsTable'
import { userBookingTableColumns } from './userBookingTableColumns'
import BookingsTableHandler from '../../../bookings/calendar/[date]/bookingsTable/BookingsTableHandler'
import UserActions from './UserActions'
export default function UserTabs({ user, bookings }) {
   console.log('user aaaaaaaaaaaaaaaa->', user)
   const { userId, email, name, role, active, created, phone } = user

   const dataList = [
      ['Nombre', name],

      ['Correo eléctronico', email],
      ['Teléfono', phone],
      ['Activo', active ? 'Sí' : 'No'],
      ['Alta', `${format(new Date(created), 'dd/MM/yyyy')} `],
      ['Id de usuario', userId],
   ]
   //Tabla de reservas
   const defaultVisibleColumns = {
      bikes: true,
      state: true,
      pickup: true,
      delivery: true,
      price: true,
      action: true,
   }

   return (
      <BasicCard tittle="Detalles de usuario" className="max-w-none">
         <Tabs defaultValue="data" className="">
            <TabsList>
               <TabsTrigger value="data">
                  <ClipboardList className="mr-2" /> Datos
               </TabsTrigger>
               <TabsTrigger value="bookings">
                  <BookMarked className="mr-2" size={24} />
                  Reservas
               </TabsTrigger>
               <TabsTrigger value="actions">
                  <Ellipsis className="mr-2" />
                  Acciones
               </TabsTrigger>
            </TabsList>
            <TabsContent value="data" className="w-full">
               <BasicCard className="mt-8 max-w-none">
                  <DualColumnData dataList={dataList} />
               </BasicCard>
            </TabsContent>
            <TabsContent value="bookings">
               <BookingsTableHandler
                  filter={false}
                  bookings={bookings}
                  columns={userBookingTableColumns}
                  defaultVisibleColumns={defaultVisibleColumns}
               />
            </TabsContent>
            <TabsContent value="actions">
               <UserActions />{' '}
            </TabsContent>
         </Tabs>
      </BasicCard>
   )
}
