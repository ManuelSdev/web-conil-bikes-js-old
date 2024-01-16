import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
   { name: 'Fecha', href: '#', status: 'complete', id: 1 },
   { name: 'Bicicletas', href: '#', status: 'complete', id: 2 },
   { name: 'Gestión', href: '#', status: 'current', id: 3 },
   { name: 'Resumen', href: '#', status: 'upcoming', id: 4 },
]

export default function StepsPanel({ step, className }) {
   console.log('StepsPanel step ->', step)
   const currentStep =
      step === 0 ? 1 : step >= 1 && step <= 3 ? 2 : step === 4 ? 3 : 4
   console.log('StepsLine currentStep ->', currentStep)
   return (
      <nav aria-label="Progress" className={className}>
         <ol
            role="list"
            className=" flex divide-y-0 rounded-md border border-gray-300"
         >
            {steps.map((step, stepIdx) => (
               <li
                  key={step.name}
                  className="relative flex flex-1 justify-center md:justify-normal"
               >
                  {step.id < currentStep ? ( //Paso completado
                     <a
                        href={step.href}
                        className="group flex items-center md:w-full"
                     >
                        <span className="flex items-center px-6 py-4 text-sm font-medium">
                           <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                              <CheckIcon
                                 className="h-6 w-6 text-white"
                                 aria-hidden="true"
                              />
                           </span>
                           <span className="ml-4 hidden text-sm font-medium text-gray-900 md:block">
                              {step.name}
                           </span>
                        </span>
                     </a>
                  ) : step.id === currentStep ? ( //Paso actual
                     <a
                        href={step.href}
                        className="flex items-center  px-6 py-4 text-sm font-medium"
                        aria-current="step"
                     >
                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-indigo-600">
                           <span className="text-indigo-600">{step.id}</span>
                        </span>
                        <span className="ml-4 text-sm font-medium text-indigo-600">
                           {step.name}
                        </span>
                     </a>
                  ) : (
                     //Paso por hacer
                     <a href={step.href} className="group flex items-center">
                        {/** estos padding controlan la bola con el número */}
                        <span className=" flex items-center px-6 py-4 text-sm font-medium">
                           <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                              <span className="text-gray-500 group-hover:text-gray-900">
                                 {step.id}
                              </span>
                           </span>
                           <span className="ml-4 hidden text-sm font-medium text-gray-500 group-hover:text-gray-900 md:block">
                              {step.name}
                           </span>
                        </span>
                     </a>
                  )}

                  {stepIdx !== steps.length - 1 ? (
                     <>
                        {/* Arrow separator for lg screens and up */}
                        <div
                           className="absolute right-0 top-0  h-full w-5"
                           aria-hidden="true"
                        >
                           <svg
                              className="h-full w-full text-gray-300"
                              viewBox="0 0 22 80"
                              fill="none"
                              preserveAspectRatio="none"
                           >
                              <path
                                 d="M0 -2L20 40L0 82"
                                 vectorEffect="non-scaling-stroke"
                                 stroke="currentcolor"
                                 strokeLinejoin="round"
                              />
                           </svg>
                        </div>
                     </>
                  ) : null}
               </li>
            ))}
         </ol>
      </nav>
   )
}
