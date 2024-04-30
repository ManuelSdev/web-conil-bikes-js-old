'use client'
import {
   flexRender,
   getCoreRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   useReactTable,
   getFilteredRowModel,
} from '@tanstack/react-table'

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
   ChevronLeft,
   ChevronRight,
   ChevronsLeft,
   ChevronsRight,
} from 'lucide-react'
import SelectPageSize from './SelectPageSize'
import { useState } from 'react'
import { mappedBookingState } from '@/utils/app/functions'

export function BookingsTable({
   columns,
   defaultVisibleColumns,
   filter = true,

   data,
}) {
   const [sorting, setSorting] = useState([])
   const [columnFilters, setColumnFilters] = useState([])

   //Si metes un objeto vacío, se mostrarán todas las columnas por defecto
   const [columnVisibility, setColumnVisibility] = useState(
      defaultVisibleColumns ? defaultVisibleColumns : {}
   )

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      //sorting
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      //filtering
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      //column visibility
      onColumnVisibilityChange: setColumnVisibility,

      state: {
         sorting,
         columnFilters,
         columnVisibility,
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
   //console.log('table -> ', table)
   //console.log('table state -> ', table.getState())

   const columnIdMap = {
      bikes: 'Bicicletas',
      email: 'Usuario',
      state: 'Estado',
      pickup: 'Entrega',
      delivery: 'Devolución',
      // price: 'Importe',
      // type: 'Tipo',
      action: 'Acciones',
   }
   return (
      <div>
         <div className="flex items-center py-4">
            {/* FILTROS */}
            {filter && (
               <div className="flex items-center py-4">
                  <Input
                     placeholder="Filtrar email de usuario..."
                     value={table.getColumn('email')?.getFilterValue() ?? ''}
                     onChange={(event) =>
                        table
                           .getColumn('email')
                           ?.setFilterValue(event.target.value)
                     }
                     className="max-w-sm"
                  />
               </div>
            )}
            {/* VISIBILIDAD DE COLUMNAS */}
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                     Columnas
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  {table
                     .getAllColumns()
                     .filter((column) => column.getCanHide())
                     .map((column) => {
                        //Ocultar la posibilidad de mostrar/ocultar la columna de acciones
                        if (column.id !== 'action')
                           return (
                              <DropdownMenuCheckboxItem
                                 key={column.id}
                                 className="capitalize"
                                 checked={column.getIsVisible()}
                                 onCheckedChange={(value) =>
                                    column.toggleVisibility(!!value)
                                 }
                              >
                                 {columnIdMap[column.id]}
                              </DropdownMenuCheckboxItem>
                           )
                     })}
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
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
                           Sin resultados
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
