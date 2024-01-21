import { CheckIcon } from '@heroicons/react/20/solid'

const steps = [
   { name: 'Fecha', href: '#', status: 'complete', id: 1 },
   { name: 'Bicicletas', href: '#', status: 'complete', id: 2 },
   { name: 'Gestión', href: '#', status: 'current', id: 3 },
   { name: 'Resumen', href: '#', status: 'upcoming', id: 4 },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function StepVertical({ step: currentStep, className }) {
   return (
      <nav aria-label="Progress">
         <ol role="list" className="overflow-hidden">
            {steps.map((step, stepIdx) => (
               <li
                  key={step.name}
                  className={classNames(
                     stepIdx !== steps.length - 1 ? 'pb-10' : '',
                     'relative'
                  )}
               >
                  {step.id < currentStep ? (
                     <>
                        {stepIdx !== steps.length - 1 ? (
                           <div
                              className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                              aria-hidden="true"
                           />
                        ) : null}
                        <a
                           href={step.href}
                           className="group relative flex items-start"
                        >
                           <span className="flex h-9 items-center">
                              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                                 <CheckIcon
                                    className="h-5 w-5 text-white"
                                    aria-hidden="true"
                                 />
                              </span>
                           </span>
                           <span className="ml-4 flex min-w-0 self-center	">
                              <span className="text-sm font-medium ">
                                 {step.name}
                              </span>
                           </span>
                        </a>
                     </>
                  ) : step.id === currentStep ? (
                     <>
                        {stepIdx !== steps.length - 1 ? (
                           <div
                              className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                              aria-hidden="true"
                           />
                        ) : null}
                        <a
                           href={step.href}
                           className="group relative flex items-start"
                           aria-current="step"
                        >
                           <span
                              className="flex h-9 items-center"
                              aria-hidden="true"
                           >
                              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                                 <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                              </span>
                           </span>
                           <span className="ml-4 flex min-w-0 self-center	">
                              <span className="text-sm font-medium text-indigo-500">
                                 {step.name}
                              </span>
                           </span>
                        </a>
                     </>
                  ) : (
                     <>
                        {stepIdx !== steps.length - 1 ? (
                           <div
                              className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                              aria-hidden="true"
                           />
                        ) : null}
                        <a
                           href={step.href}
                           className="group relative flex items-start"
                        >
                           <span
                              className="flex h-9 items-center"
                              aria-hidden="true"
                           >
                              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                                 <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                              </span>
                           </span>
                           <span className="ml-4 flex min-w-0 self-center	">
                              <span className="text-sm font-medium text-gray-500">
                                 {step.name}
                              </span>
                           </span>
                        </a>
                     </>
                  )}
               </li>
            ))}
         </ol>
      </nav>
   )
}
