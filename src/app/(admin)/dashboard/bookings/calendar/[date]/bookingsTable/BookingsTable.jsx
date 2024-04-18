'use client'
import {
   flexRender,
   getCoreRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   useReactTable,
} from '@tanstack/react-table'

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
   ChevronLeft,
   ChevronRight,
   ChevronsLeft,
   ChevronsRight,
} from 'lucide-react'
import SelectPageSize from './SelectPageSize'
import { useState } from 'react'

export function BookingsTable({ columns, data }) {
   const [sorting, setSorting] = useState([])
   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      //sorting
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      state: {
         sorting,
      },
   })
   const tableState = table.getState()
   //índice actual
   const currentIndex = tableState.pagination.pageIndex
   //Pagina actual
   const currentPage = currentIndex + 1
   //Número de filas por página
   const pageSize = tableState.pagination.pageSize
   //Indices totales: si tienes 4 pagínas, esto suelta  0123
   const pageOptions = table.getPageOptions()
   //Número total de páginas
   const pageCount = table.getPageCount()
   console.log('table -> ', table)
   console.log('table state -> ', table.getState())
   return (
      <div>
         <div className="rounded-md border">
            <Table>
               <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                           return (
                              <TableHead key={header.id}>
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                         header.column.columnDef.header,
                                         header.getContext()
                                      )}
                              </TableHead>
                           )
                        })}
                     </TableRow>
                  ))}
               </TableHeader>
               <TableBody>
                  {table.getRowModel().rows?.length ? (
                     table.getRowModel().rows.map((row) => (
                        <TableRow
                           key={row.id}
                           data-state={row.getIsSelected() && 'selected'}
                        >
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                 {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                 )}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell
                           colSpan={columns.length}
                           className="h-24 text-center"
                        >
                           No results.
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>
         <div className="flex items-center justify-between  py-4">
            <div className="flex justify-end space-x-2">
               <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.firstPage()}
                  disabled={!table.getCanPreviousPage()}
               >
                  <ChevronsLeft className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
               >
                  <ChevronLeft className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
               >
                  <ChevronRight className="h-4 w-4" />
               </Button>
               <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.lastPage()}
                  disabled={!table.getCanNextPage()}
               >
                  <ChevronsRight className="h-4 w-4" />
               </Button>
            </div>
            <div className="flex flex-col">
               <div>
                  Página {currentPage} de {pageCount}
               </div>
            </div>
            <div className="flex items-center  justify-end space-x-2">
               <SelectPageSize
                  onValueChange={(value) => table.setPageSize(value)}
               />
            </div>
         </div>
      </div>
   )
}
