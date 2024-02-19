import React from 'react'
import { DialogWindow } from '../common/DialogWindow'
import useDialogWindow from '../common/useDialogWindow'
export default function ModalLoader() {
   const { dialog, handleSetDialog } = useDialogWindow(null)

   return (
      <div>
         <div className="text-center">
            <button
               type="button"
               className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
               data-hs-overlay="#hs-modal-recover-account"
            >
               Open modal
            </button>
         </div>

         <div
            id="hs-modal-recover-account"
            className="hs-overlay size-full fixed start-0 top-0 z-[80]  overflow-y-auto overflow-x-hidden"
         >
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 m-3 mt-0 opacity-0 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-lg">
               <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="p-4 sm:p-7">
                     <div className="text-center">
                        <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                           Forgot password?
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                           Remember your password?
                           <a
                              className="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              href="../examples/html/modal-signin.html"
                           >
                              Sign in here
                           </a>
                        </p>
                     </div>

                     <div className="mt-5">
                        {/* Form */}
                        <form>
                           <div className="grid gap-y-4">
                              {/* Form Group */}
                              <div>
                                 <label
                                    for="email"
                                    className="mb-2 block text-sm dark:text-white"
                                 >
                                    Email address
                                 </label>
                                 <div className="relative">
                                    <input
                                       type="email"
                                       id="email"
                                       name="email"
                                       className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                                       required
                                       aria-describedby="email-error"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
                                       <svg
                                          className="size-5 text-red-500"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          viewBox="0 0 16 16"
                                          aria-hidden="true"
                                       >
                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                       </svg>
                                    </div>
                                 </div>
                                 <p
                                    className="mt-2 hidden text-xs text-red-600"
                                    id="email-error"
                                 >
                                    Please include a valid email address so we
                                    can get back to you
                                 </p>
                              </div>
                              {/* End Form Group */}

                              <button
                                 type="submit"
                                 className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              >
                                 Reset password
                              </button>
                           </div>
                        </form>
                        {/* End Form */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
