import { TableWrapper } from '@/components/ui-tw/table'
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableFooter,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table'

export function BikesTable({ bikes }) {
   return (
      <TableWrapper>
         <Table>
            <TableHeader className="bg-gray-100">
               <TableRow>
                  <TableHead className={'pl-4 pr-3 sm:pl-6'}>Modelo</TableHead>

                  <TableHead>Talla</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Gama</TableHead>

                  <TableHead>Cesta</TableHead>
                  <TableHead>Pedal</TableHead>
                  <TableHead className={'py-4 pl-3 pr-4 text-right sm:pr-6'}>
                     Marca
                  </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {bikes.map((bike) => (
                  <TableRow key={bike.modelId}>
                     <TableCell className={'pl-4 pr-3 sm:pl-6'}>
                        {bike.modelName}
                     </TableCell>
                     <TableCell>{bike.bikeSize}</TableCell>
                     <TableCell>{bike.modelType}</TableCell>
                     <TableCell>{bike.modelRange}</TableCell>
                     <TableCell>{bike.basket ? 'Sí' : 'No'}</TableCell>
                     <TableCell>
                        {' '}
                        {bike.pedal ? bike.pedal : 'Estandar'}
                     </TableCell>
                     <TableCell className={'py-4 pl-3 pr-4 text-right sm:pr-6'}>
                        {bike.modelBrand}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableWrapper>
   )
}
