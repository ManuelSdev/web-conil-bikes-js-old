import React from 'react'

import Image from 'next/image'
export default function ImageCard({ src, label, title, text }) {
   return (
      <div className="w-full rounded-lg bg-white shadow dark:border-gray-700 dark:bg-gray-800">
         <div className="relative h-[200px] w-full overflow-hidden min-[450px]:h-[300px]  lg:h-[200px]">
            <Image
               src={src}
               alt=""
               fill
               className="rounded-t-lg object-cover"
            />
            <div className="absolute bottom-2 left-2 z-30 w-fit border-4 border-solid border-white bg-black/50 p-3 text-white ">
               {label}
            </div>
         </div>

         <div className="p-5">
            <a href="#">
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
               </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {text}
            </p>
            <button>PONER BOTON</button>
         </div>
      </div>
   )
}
