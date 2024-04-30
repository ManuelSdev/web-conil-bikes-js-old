'use client'

import Link from 'next/link'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const userBookingTableColumns = [
   {
      accessorKey: 'bikes',
      header: ({ column }) => {
         return (
            <Button
               className="pl-0"
               variant="ghost"
               onClick={() =>
                  column.toggleSorting(column.getIsSorted() === 'asc')
               }
            >
               Bicicletas
               <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
         )
      },
   },

   {
      accessorKey: 'state',
      header: 'Estado',
   },
   {
      accessorKey: 'pickup',
      header: 'Entrega',
   },
   {
      accessorKey: 'delivery',
      header: 'Devolución',
   },
   {
      accessorKey: 'price',
      header: ({ column }) => {
         return (
            <div className="text-right">
               {' '}
               <Button
                  className="pr-0 text-right"
                  variant="ghost"
                  onClick={() =>
                     column.toggleSorting(column.getIsSorted() === 'asc')
                  }
               >
                  Importe
                  <ArrowUpDown className="ml-2 h-4 w-4" />
               </Button>
            </div>
         )
      },
      cell: ({ row }) => {
         // const amount = parseFloat(row.getValue('amount'))
         const { price } = row.original
         const formatted = new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
         }).format(price)
         return <div className="text-right font-medium">{formatted}</div>
      },
   },

   {
      id: 'action',
      cell: ({ row }) => {
         const { bookingId, date } = row.original
         //  console.log('row -> ', row)
         /**
          * row contiene la propiedad "original" que es el objeto que
          * se le pasa a la tabla para la fila correspondiente
          */
         return (
            <Link
               href={`/dashboard/bookings/${bookingId}/details`}
               className="text-indigo-600 hover:text-indigo-900"
            >
               Ver
               <span className="sr-only">, {bookingId}</span>
            </Link>
         )
      },
   },
]
