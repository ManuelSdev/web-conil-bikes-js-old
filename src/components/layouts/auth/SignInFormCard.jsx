import React from 'react'
import { Button } from '../../ui/button'
import GoogleIcon from '../../svg/GoogleIcon'
import Image from 'next/image'
//import main from '@/public/main.jpg'
export default function SignInFormCard({ isAdmin, label }) {
   return (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
         <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {label}
         </h2>
         <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
               <div>
                  <label
                     htmlFor="email"
                     className="block text-sm font-medium leading-6 text-gray-900"
                  >
                     Email address
                  </label>
                  <div className="mt-2">
                     <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                  </div>
               </div>

               <div>
                  <label
                     htmlFor="password"
                     className="block text-sm font-medium leading-6 text-gray-900"
                  >
                     Password
                  </label>
                  <div className="mt-2">
                     <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                     />
                  </div>
               </div>

               <div className="flex items-center">
                  <input
                     id="remember-me"
                     name="remember-me"
                     type="checkbox"
                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                     htmlFor="remember-me"
                     className="ml-3 block text-sm leading-6 text-gray-900"
                  >
                     Recordarme
                  </label>
               </div>

               <div>
                  <button
                     type="submit"
                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                     Sign in
                  </button>
               </div>
               <div className="flex items-center justify-between">
                  <div className="text-sm leading-6">
                     <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                     >
                        ¿Olvidaste la contraseña?
                     </a>
                  </div>

                  {isAdmin || (
                     <div className="text-sm leading-6">
                        <a
                           href="#"
                           className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                           Crear cuenta
                        </a>
                     </div>
                  )}
               </div>
            </form>
            {isAdmin || (
               <div>
                  <div className="relative mt-10">
                     <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                     >
                        <div className="w-full border-t border-gray-200" />
                     </div>
                     <div className="relative flex justify-center text-sm font-medium leading-6">
                        <span className="bg-white px-6 text-gray-900">
                           O inicia sesión con tu cuenta de Google
                        </span>
                     </div>
                  </div>

                  <div className="mt-6">
                     <Button className={'w-full'}>
                        <GoogleIcon className="mr-2 h-6 w-6" />
                        INICIAR SESIÓN CON GOOGLE
                     </Button>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}
