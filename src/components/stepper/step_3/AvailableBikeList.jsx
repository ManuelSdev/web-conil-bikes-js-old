'use client'
import Image from 'next/image'

const AvailableBikesList = ({ availableBikes, renderSelectBikeButton }) => {
   // const dateRange = decodeURIComponent(dateRanges)
   //TODO:listener a este dispatch
   //const a = useSelector(selectDateRange)
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
   //TODO : USAR LOADING porque parece que peta por availableBikes undefined cuando se entra
   //al sttepper desde la redireccion del login desde el stepper publico
   return (
      <div>
         {availableBikes &&
            availableBikes.map((bike, idx) => {
               const {
                  modelBrand,
                  modelName,
                  modelDesc,
                  modelImages,
                  avaiable,
               } = bike
               const [src] = modelImages
               return (
                  <div
                     key={idx}
                     className="my-3 w-full rounded-lg bg-white shadow dark:border-gray-700 dark:bg-gray-800"
                  >
                     <div className="relative h-[200px] w-full overflow-hidden min-[450px]:h-[300px]  lg:h-[200px]">
                        <Image
                           src={src}
                           alt=""
                           fill
                           //   style={{ objectFit: 'contain' }}
                           className="rounded-t-lg object-contain"
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
                        {renderSelectBikeButton(bike)}
                     </div>
                  </div>
               )
            })}
      </div>
   )
}

export default AvailableBikesList
