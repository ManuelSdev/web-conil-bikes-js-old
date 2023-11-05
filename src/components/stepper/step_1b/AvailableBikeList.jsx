'use client'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { Button } from '@/components/ui/button'
import { bikeSelected } from '@/lib/redux/slices/bookingFormSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { AlertDialogButton } from './AlertDialogButton'

const AvailableBikesList = ({
   isLogged,
   bikeForm,
   setStep,
   resetBikeForm,
   availableBikes,
   searchParams,
}) => {
   const { step, date: dateRange, size, type, range } = searchParams

   //TODO:listener a este dispatch
   const dispatch = useDispatch()
   const router = useRouter()
   console.log('process.env.URL ->', process.env.URL)

   const handleNewSearch = () => {
      setForm({ ...initialForm })
   }

   const handleClick = (bike) => (ev) => {
      dispatch(bikeSelected(bike))
      router.push(`/user/booking?step=1&date=${dateRange}`)
      //resetBikeForm()
   }

   const handlePrev = () => {
      router.push(
         isLogged
            ? `/user/booking?step=1&date=${dateRange}`
            : `/booking?step=1&date=${dateRange}`
      )
   }
   const handleAction = () => {
      router.push(
         `/user/booking?step=1b&date=${dateRange}&size=${size}&type=${type}&range=${range}`
      )
   }
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
                           handleAction={handleAction}
                        />
                     )}
                  </div>
               </div>
            )
         })}
         <MobileBottomAppBar disabled={true} handlePrev={handlePrev} />
      </div>
   )
}

export default AvailableBikesList
