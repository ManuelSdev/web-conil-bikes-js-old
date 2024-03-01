import Card from '@/components/layouts/Card'
import React from 'react'
import { NewUserForm } from './components/NewUserForm'
import { User } from '@phosphor-icons/react/dist/ssr'
import UserSubShell from '@/components/layouts/admin/UserSubShell'

export default function NewUserPage() {
   const cardProps = {
      //className: 'max-w-[334px]',
      // className: 'col-span-4',
      cardTitle: 'Datos del nuevo usuario',
      // cardDescription: 'Hin reverse chronological order.',
   }
   return (
      <UserSubShell>
         <Card {...cardProps}>
            <NewUserForm />
         </Card>

         <form className="mx-auto max-w-md">
            <div className="group relative z-0 mb-5 w-full">
               <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
               />{' '}
               <label
                  for="floating_email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
               >
                  Email addressssssss
               </label>
            </div>
            <div className="group relative z-0 mb-5 w-full">
               <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
               />
               <label
                  for="floating_password"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
               >
                  Password
               </label>
            </div>
            <div className="group relative z-0 mb-5 w-full">
               <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  placeholder=" "
                  required
               />
               <label
                  for="floating_repeat_password"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
               >
                  Confirm password
               </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
               <div className="group relative z-0 mb-5 w-full">
                  <input
                     type="text"
                     name="floating_first_name"
                     id="floating_first_name"
                     className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                     placeholder=" "
                     required
                  />
                  <label
                     for="floating_first_name"
                     className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                     First name
                  </label>
               </div>
               <div className="group relative z-0 mb-5 w-full">
                  <input
                     type="text"
                     name="floating_last_name"
                     id="floating_last_name"
                     className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                     placeholder=" "
                     required
                  />
                  <label
                     for="floating_last_name"
                     className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                     Last name
                  </label>
               </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
               <div className="group relative z-0 mb-5 w-full">
                  <input
                     type="tel"
                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                     name="floating_phone"
                     id="floating_phone"
                     className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                     placeholder=" "
                     required
                  />
                  <label
                     for="floating_phone"
                     className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                     Phone number (123-456-7890)
                  </label>
               </div>
               <div className="group relative z-0 mb-5 w-full">
                  <input
                     type="text"
                     name="floating_company"
                     id="floating_company"
                     className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                     placeholder=" "
                     required
                  />
                  <label
                     for="floating_company"
                     className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                     Company (Ex. Google)
                  </label>
               </div>
            </div>
            <button
               type="submit"
               className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
               Submit
            </button>
         </form>
      </UserSubShell>
   )
}
