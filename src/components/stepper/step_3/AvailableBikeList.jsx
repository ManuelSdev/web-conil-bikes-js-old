'use client'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { Button } from '@/components/ui/button'
import {
   bikeSelected,
   selectBookingDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { AlertDialogButton } from './AlertDialogButton'
import {
   useCreateCookieQuery,
   useLazyCreateCookieQuery,
} from '@/lib/redux/apiSlices/cookieApi'

const AvailableBikesList = ({
   isLogged,

   availableBikes,
   handleDialogAction,
}) => {
   // const dateRange = decodeURIComponent(dateRanges)
   //TODO:listener a este dispatch
   //const a = useSelector(selectBookingDateRange)
   //console.log('a ->', a)
   /*
   const dispatch = useDispatch()
   const router = useRouter()

   const handleNewSearch = () => {
      setForm({ ...initialForm })
   }
   const handleClick = (bike) => (ev) => {
      console.log('bike ->', bike)
      dispatch(bikeSelected(bike))

      router.push(`/user/booking?step=1&date=${dateRange}`)
      //resetBikeForm()
   }
*/

   return (
      <div>
         {availableBikes.map((bike, idx) => {
            const { modelBrand, modelName, modelDesc, modelImages, avaiable } =
               bike
            const [src] = modelImages
            return (
               <div
                  key={idx}
                  className="w-full rounded-lg bg-white shadow dark:border-gray-700 dark:bg-gray-800"
               >
                  <div className="relative h-[200px] w-full overflow-hidden min-[450px]:h-[300px]  lg:h-[200px]">
                     <Image
                        src={src}
                        alt=""
                        fill
                        className="rounded-t-lg object-cover"
                     />
                  </div>

                  <div className="p-5">
                     <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                           {`${modelBrand} ${modelName}`}
                        </h5>
                     </a>
                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {modelDesc}
                     </p>
                     {isLogged ? (
                        <Button onClick={handleClick(bike)}>Seleccionar</Button>
                     ) : (
                        <AlertDialogButton
                           title={'Inicia sesión para reservar'}
                           description={
                              'Para gestionar una reserva, primero debes iniciar sesión. Pulsa el botón para acceder a la página de inicio de sesión, donde podrás acceder con tu cuenta o crear una nueva si aún no lo has hecho.'
                           }
                           actionText={'Iniciar sesión'}
                           cancelText={'Cancelar'}
                           triggerButtonText={'Seleccionar'}
                           handleAction={handleDialogAction}
                        />
                     )}
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default AvailableBikesList
