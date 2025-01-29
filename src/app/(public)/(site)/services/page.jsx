import React from 'react'

export default function page() {
   return (
      <div>
         {' '}
         <section className="relative py-24">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
               <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:gap-14">
                  <div className="flex w-full flex-col items-center justify-center gap-5">
                     <div className="flex w-full flex-col items-center justify-center gap-6">
                        <div className="flex w-full flex-col items-center justify-start gap-2.5">
                           <h2 className="font-manrope text-center text-3xl font-bold leading-normal text-gray-300">
                              Página en construcción.
                           </h2>
                        </div>
                        <div className="count-down-main flex w-full items-start justify-center gap-1">
                           <div className="timer">
                              <div className="">
                                 <h3 className="countdown-element days font-manrope text-center text-3xl font-normal leading-normal text-black"></h3>
                              </div>
                           </div>
                           <h3 className="font-manrope text-center text-3xl font-normal leading-normal text-black">
                              :
                           </h3>
                           <div className="timer">
                              <div className="">
                                 <h3 className="countdown-element hours font-manrope text-center text-3xl font-normal leading-normal text-black"></h3>
                              </div>
                           </div>
                           <h3 className="font-manrope text-center text-3xl font-normal leading-normal text-black">
                              :
                           </h3>
                           <div className="timer">
                              <div className="">
                                 <h3 className="countdown-element minutes font-manrope text-center text-3xl font-normal leading-normal text-black"></h3>
                              </div>
                           </div>
                           <h3 className="font-manrope text-center text-3xl font-normal leading-normal text-black">
                              :
                           </h3>
                           <div className="timer">
                              <div className="">
                                 <h3 className="countdown-element seconds font-manrope text-center text-3xl font-normal leading-normal text-black"></h3>
                              </div>
                           </div>
                        </div>
                     </div>
                     <img
                        src="https://pagedone.io/asset/uploads/1718004199.png"
                        alt="under maintenance image"
                        className="object-cover"
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
