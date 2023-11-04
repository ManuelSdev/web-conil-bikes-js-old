'use client'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { Button } from '@/components/ui/button'
import { bikeSelected } from '@/lib/redux/slices/bookingFormSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

const AvailableBikesList = ({
   dateRange,
   bikeForm,
   setStep,
   resetBikeForm,
   availableBikes,
}) => {
   //TODO:listener a este dispatch
   const dispatch = useDispatch()
   const router = useRouter()
   //console.log(bikeForm)

   const handleNewSearch = () => {
      setForm({ ...initialForm })
   }

   const handleClick = (bike) => (ev) => {
      dispatch(bikeSelected(bike))
      router.push(`/booking?step=1&date=${dateRange}`)
      //resetBikeForm()
   }

   const handlePrev = () => {
      router.push(`/booking?step=1&date=${dateRange}`)
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

                     <Button onClick={handleClick(bike)}>Seleccionar</Button>
                  </div>
               </div>
            )
         })}
         <MobileBottomAppBar disabled={true} handlePrev={handlePrev} />
      </div>
   )
}

export default AvailableBikesList
