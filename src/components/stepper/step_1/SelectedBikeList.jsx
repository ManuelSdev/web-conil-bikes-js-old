import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { Bike, Trash2 } from 'lucide-react'
import { BIKE_TYPES_MAP } from '@/utils/app/appValues'
import { capitalizeFirst } from '@/utils/app/functions'
/*
 <Button onClick={() => setStep(2)}>Añadir bicicletas</Button>
 */

export default function SelectedBikeList({
   bikes,
   handleDeleteButton,
   handleAddBikeButton,
}) {
   return (
      <div>
         <ul role="list" className="divide-y divide-gray-100">
            {bikes.map((bike, idx) => (
               <li
                  key={idx}
                  className="flex items-center justify-between gap-x-6 py-5"
               >
                  <div className="flex min-w-0 gap-x-4">
                     <div
                        className=" flex items-center rounded-full bg-gray-50"
                        //  src={person.imageUrl}
                        alt=""
                     >
                        <Bike className="h-9 w-9" />
                     </div>
                     <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                           {`${bike.modelBrand} ${bike.modelName}`}
                        </p>
                        <p className="truncate text-xs leading-5 text-gray-500">
                           {`${capitalizeFirst(
                              BIKE_TYPES_MAP[bike.modelType]
                           )}, talla ${bike.bikeSize}`}
                        </p>
                     </div>
                  </div>

                  <Button
                     onClick={handleDeleteButton(bike)}
                     variant="ghost"
                     size="icon"
                  >
                     <Trash2 />
                  </Button>
               </li>
            ))}
         </ul>
         <Button onClick={handleAddBikeButton}>Añadir bicicleta</Button>
      </div>
   )
}
