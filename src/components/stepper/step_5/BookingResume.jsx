import { BIKE_RANGES_MAP, BIKE_TYPES_MAP } from '@/utils/app/appValues'
import React from 'react'
import {
   CheckIcon,
   ClockIcon,
   QuestionMarkCircleIcon,
   XMarkIcon,
} from '@heroicons/react/20/solid'
import {
   CalendarDaysIcon,
   CreditCardIcon,
   UserCircleIcon,
} from '@heroicons/react/20/solid'
import { add, format } from 'date-fns'

export default function BookingResume({
   name,
   phone,
   email,
   address,
   delivery,
   pickup,
   bikesByUnits: bikes,
   dateRange,
   dayPrice,
   totalPrice,
   duration,
   renderCheckoutButton,
}) {
   const { from, to } = dateRange

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
                                 // className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                              />
                           </div>
                           <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                              <div>
                                 <div className="flex justify-between">
                                    <h4 className="text-sm">
                                       <p className="font-medium text-gray-700 hover:text-gray-800">
                                          {`${bike.modelBrand} ${bike.modelName}`}
                                       </p>
                                    </h4>
                                    <p className="ml-4 text-sm font-medium text-gray-900">
                                       {
                                          bike.price
                                          // handleBikePrice(bike)
                                       }{' '}
                                       €/día
                                    </p>
                                 </div>
                                 <p className="mt-1 text-sm text-gray-500">
                                    Tipo: {BIKE_TYPES_MAP[bike.modelType]}
                                 </p>
                                 <p className="mt-1 text-sm text-gray-500">
                                    Gama: {BIKE_RANGES_MAP[bike.modelRange]}
                                 </p>
                                 <p className="mt-1 text-sm text-gray-500">
                                    Talla: {bike.bikeSize}
                                 </p>
                              </div>

                              <div className="mt-4 flex flex-1 items-end justify-between">
                                 <p className="flex items-center space-x-2 text-sm text-gray-700">
                                    {true ? (
                                       // product.inStock
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

                                    <span>
                                       {true
                                          ? //  product.inStock
                                            'In stock'
                                          : `Will ship in $ {product.leadTime} `}
                                    </span>
                                 </p>
                                 <div className="ml-4">
                                    <button
                                       type="button"
                                       className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                       <span>Remove</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </section>
               {/* Order summary */}
               <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
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
                        <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5  pt-6">
                           <dt className="flex-none">
                              <span className="sr-only">Client</span>
                              <UserCircleIcon
                                 className="h-6 w-5 text-gray-400"
                                 aria-hidden="true"
                              />
                           </dt>
                           <dd className="text-sm font-medium leading-6 text-gray-900">
                              {name}
                           </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 ">
                           <dt className="flex-none">
                              <span className="sr-only">Due date</span>
                              <CalendarDaysIcon
                                 className="h-6 w-5 text-gray-400"
                                 aria-hidden="true"
                              />
                           </dt>
                           <dd className="text-sm leading-6 text-gray-500">
                              <time dateTime="2023-01-31">{email}</time>
                           </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 ">
                           <dt className="flex-none">
                              <span className="sr-only">Due date</span>
                              <CalendarDaysIcon
                                 className="h-6 w-5 text-gray-400"
                                 aria-hidden="true"
                              />
                           </dt>
                           <dd className="text-sm leading-6 text-gray-500">
                              <time dateTime="2023-01-31">{phone}</time>
                           </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 ">
                           <dt className="flex-none">
                              <span className="sr-only">Due date</span>
                              <CalendarDaysIcon
                                 className="h-6 w-5 text-gray-400"
                                 aria-hidden="true"
                              />
                           </dt>
                           <dd className="text-sm leading-6 text-gray-500">
                              <time dateTime="2023-01-31">{address}</time>
                           </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 ">
                           <dt className="flex-none">
                              <span className="sr-only">Due date</span>
                              <CalendarDaysIcon
                                 className="h-6 w-5 text-gray-400"
                                 aria-hidden="true"
                              />
                           </dt>
                           <dd className="text-sm leading-6 text-gray-500">
                              <time dateTime="2023-01-31">
                                 {`Del ${format(
                                    new Date(from),
                                    'dd/MM/yyyy'
                                 )} al ${format(new Date(to), 'dd/MM/yyyy')}}`}
                              </time>
                           </dd>
                        </div>

                        <div className="mt-4 flex w-full flex-none gap-x-4 ">
                           <dt className="flex-none">
                              <span className="sr-only">Status</span>
                              <CreditCardIcon
                                 className="h-6 w-5 text-gray-400"
                                 aria-hidden="true"
                              />
                           </dt>
                           <dd className="text-sm leading-6 text-gray-500">
                              {delivery
                                 ? 'Entrega de bicicletas en tienda el día de inicio de la reserva'
                                 : 'Entrega de biciletas a domicilio el día de inicio de la reserva'}
                           </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 ">
                           <dt className="flex-none">
                              <span className="sr-only">Status</span>
                              <CreditCardIcon
                                 className="h-6 w-5 text-gray-400"
                                 aria-hidden="true"
                              />
                           </dt>
                           <dd className="text-sm leading-6 text-gray-500">
                              {pickup
                                 ? 'Devolución de bicicletas en tienda el último día de la reserva'
                                 : 'Recogida de bicicletas a domicilio el último día de la reserva'}
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
                           <dt className="text-sm text-gray-600">
                              Precio por día
                           </dt>
                           <dd className="text-sm font-medium text-gray-900">
                              {dayPrice} €
                           </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                           <dt className="flex items-center text-sm text-gray-600">
                              <span>Duración de la reserva</span>
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
                              {duration} días
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
                              holi €
                           </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                           <dt className="text-base font-medium text-gray-900">
                              Precio final
                           </dt>
                           <dd className="text-base font-medium text-gray-900">
                              {totalPrice} €
                           </dd>
                        </div>
                     </dl>

                     <div className="mt-6">{renderCheckoutButton()}</div>
                  </section>
               </div>
            </form>
         </div>
      </div>
   )
}
