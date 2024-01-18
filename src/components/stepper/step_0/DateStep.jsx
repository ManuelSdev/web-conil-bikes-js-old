import DatePicker from '@/components/datepicker/DatePicker'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import Link from 'next/link'
import React from 'react'

const FROM = 'from'
const TO = 'to'

export default function DateStep({ from, to, handleSelect, linkDisabled }) {
   return (
      <div>
         <div className="flex justify-center gap-5">
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
               <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2
                     id="social-impact-heading"
                     className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                  >
                     <span className="block sm:inline">Alquiler de </span>
                     <span className="block sm:inline">bicicletas premium</span>
                  </h2>
                  <p className="mt-3 text-xl text-white">
                     Conil Bikes es un distribuidor oficial de bicicletas
                     Specialized, ofreciendo bicicletas de alquiler en Conil,
                     Vejer, Barbate y alrededores. Disponemos de una gama
                     completa de bicicletas de carretera, montaña, paseo y
                     eléctricas para elegir. Nuestras bicicletas de alquiler se
                     actualizan cada año. Disponemos de recogida en tienda o
                     servicio de entrega. Para reservar o consultar
                     disponibilidad/precios siga los sencillos pasos a
                     continuación:
                  </p>

                  <div className="mt-8 py-3">
                     <DatePicker
                        label="Inicio"
                        date={from}
                        handleSelect={handleSelect(FROM)}
                     />
                     <DatePicker
                        label="Fin"
                        date={to}
                        handleSelect={handleSelect(TO)}
                     />
                  </div>
                  {!linkDisabled ? (
                     <Link
                        disabled
                        href="/bookingg/bikes"
                        className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                     >
                        Continuar
                     </Link>
                  ) : (
                     <button
                        disabled
                        className="mt-8 block w-full rounded-md border border-transparent bg-red-300 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                     >
                        {' '}
                        Continuar
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

/*<MobileBottomAppBar {...props} />*/
