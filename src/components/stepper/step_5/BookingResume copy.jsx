import {
   selectBikesByUnits,
   selectBookingDayPrice,
   selectBookingDuration,
   selectBookingManagement,
   selectDateRange,
} from '@/lib/redux/slices/bookingFormSlice'
import { BIKE_RANGES_MAP, BIKE_TYPES_MAP } from '@/utils/app/appValues'
import React from 'react'
import { useSelector } from 'react-redux'
import {
   CheckIcon,
   ClockIcon,
   QuestionMarkCircleIcon,
   XMarkIcon,
} from '@heroicons/react/20/solid'

export default function BookingResume() {
   const bikes = useSelector(selectBikesByUnits)
   const bookingDayPrice = useSelector(selectBookingDayPrice)
   const bookingDuration = useSelector(selectBookingDuration)
   const { from, to } = useSelector(selectDateRange)
   const { address, delivery, pickup } = useSelector(selectBookingManagement)
   const userData = ['name', 'email', 'phone', 'address']
   const bookingTotalPrice = bookingDayPrice * bookingDuration
   return (
      <div className="bg-white">
         <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               Shopping Cart
            </h1>
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
               <section
                  aria-labelledby="cart-heading"
                  className="lg:col-span-7"
               >
                  <h2 id="cart-heading" className="sr-only">
                     Items in your shopping cart
                  </h2>

                  <ul
                     role="list"
                     className="divide-y divide-gray-200 border-b border-t border-gray-200"
                  >
                     {bikes.map((bike, idx) => (
                        <li key={idx} className="flex py-6 sm:py-10">
                           <div className="flex-shrink-0">
                              <img
                                 src={bike.modelImages[0]}
                                 alt={'bike.imageAlt'}
                                 className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                              />
                           </div>

                           <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                 <div>
                                    <div className="flex justify-between">
                                       <h3 className="text-sm">
                                          <p className="font-medium text-gray-700 hover:text-gray-800">
                                             {`${bike.modelBrand} ${bike.modelName}`}
                                          </p>
                                       </h3>
                                    </div>
                                    <div className="mt-1 flex text-sm">
                                       <p className="text-gray-500">
                                          Tipo: {BIKE_TYPES_MAP[bike.modelType]}
                                       </p>
                                       <p className="text-gray-500">
                                          Gama:{' '}
                                          {BIKE_RANGES_MAP[bike.modelRange]}
                                       </p>
                                       <p className="text-gray-500">
                                          Talla: {bike.bikeSize}
                                       </p>
                                    </div>
                                    <p className="mt-1 text-sm font-medium text-gray-900">
                                       {'product.price'}
                                    </p>
                                 </div>

                                 <div className="mt-4 sm:mt-0 sm:pr-9">
                                    <label
                                       htmlFor={`quantity-${idx}`}
                                       className="sr-only"
                                    >
                                       Quantity, {'product.name'}
                                    </label>
                                    <select
                                       id={`quantity-${idx}`}
                                       name={`quantity-${idx}`}
                                       className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                    >
                                       <option value={1}>1</option>
                                       <option value={2}>2</option>
                                       <option value={3}>3</option>
                                       <option value={4}>4</option>
                                       <option value={5}>5</option>
                                       <option value={6}>6</option>
                                       <option value={7}>7</option>
                                       <option value={8}>8</option>
                                    </select>

                                    <div className="absolute right-0 top-0">
                                       <button
                                          type="button"
                                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                       >
                                          <span className="sr-only">
                                             Remove
                                          </span>
                                          <XMarkIcon
                                             className="h-5 w-5"
                                             aria-hidden="true"
                                          />
                                       </button>
                                    </div>
                                 </div>
                              </div>

                              <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                 {true ? (
                                    <CheckIcon
                                       className="h-5 w-5 flex-shrink-0 text-green-500"
                                       aria-hidden="true"
                                    />
                                 ) : (
                                    <ClockIcon
                                       className="h-5 w-5 flex-shrink-0 text-gray-300"
                                       aria-hidden="true"
                                    />
                                 )}

                                 <span>{true ? 'In stock' : `Ships in `}</span>
                              </p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </section>

               {/* Order summary */}
               <section
                  aria-labelledby="summary-heading"
                  className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
               >
                  <h2
                     id="summary-heading"
                     className="text-lg font-medium text-gray-900"
                  >
                     Order summary
                  </h2>

                  <dl className="mt-6 space-y-4">
                     <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-600">Subtotal</dt>
                        <dd className="text-sm font-medium text-gray-900">
                           $99.00
                        </dd>
                     </div>
                     <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <dt className="flex items-center text-sm text-gray-600">
                           <span>Shipping estimate</span>
                           <a
                              href="#"
                              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                           >
                              <span className="sr-only">
                                 Learn more about how shipping is calculated
                              </span>
                              <QuestionMarkCircleIcon
                                 className="h-5 w-5"
                                 aria-hidden="true"
                              />
                           </a>
                        </dt>
                        <dd className="text-sm font-medium text-gray-900">
                           $5.00
                        </dd>
                     </div>
                     <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <dt className="flex text-sm text-gray-600">
                           <span>Tax estimate</span>
                           <a
                              href="#"
                              className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                           >
                              <span className="sr-only">
                                 Learn more about how tax is calculated
                              </span>
                              <QuestionMarkCircleIcon
                                 className="h-5 w-5"
                                 aria-hidden="true"
                              />
                           </a>
                        </dt>
                        <dd className="text-sm font-medium text-gray-900">
                           $8.32
                        </dd>
                     </div>
                     <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <dt className="text-base font-medium text-gray-900">
                           Order total
                        </dt>
                        <dd className="text-base font-medium text-gray-900">
                           $112.32
                        </dd>
                     </div>
                  </dl>

                  <div className="mt-6">
                     <button
                        type="submit"
                        className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                     >
                        Checkout
                     </button>
                  </div>
               </section>
            </form>
         </div>
      </div>
   )
}
