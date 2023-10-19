import React from 'react'
import Paper from './common/Paper'
import A from '../../public/images/home/rent.webp'
import Image from 'next/image'
export default function ImageCard({ src, label, title, text }) {
   return (
      <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
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
            <a
               href="#"
               className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Read more
               <svg
                  className="ml-2 h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
               >
                  <path
                     stroke="currentColor"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
               </svg>
            </a>
         </div>
      </div>
   )
}
