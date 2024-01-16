import { CheckIcon } from '@heroicons/react/20/solid'

const steps = [
   { name: 'Step 1', href: '#', status: 'complete', id: 1 },
   { name: 'Step 2', href: '#', status: 'complete', id: 2 },
   { name: 'Step 3', href: '#', status: 'current', id: 3 },
   { name: 'Step 4', href: '#', status: 'upcoming', id: 4 },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function StepsLine({ step }) {
   console.log('StepsLine step ->', step)
   //Los pasos 1,2 y 3 se consideran un solo paso (elegir bicicleta)
   const currentStep =
      step === 0 ? 1 : step >= 1 && step <= 3 ? 2 : step === 4 ? 3 : 4

   //   console.log('StepsLine currentStep ->', currentStep)

   //const handleStep
   return (
      <nav aria-label="Progress">
         <ol role="list" className="flex items-center">
            {steps.map((step, stepIdx) => (
               <li
                  key={step.name}
                  className={classNames(
                     stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                     'relative'
                  )}
               >
                  {step.id < currentStep ? (
                     <>
                        <div
                           className="absolute inset-0 flex items-center"
                           aria-hidden="true"
                        >
                           <div className="ml-10 mr-2 h-0.5 w-full bg-indigo-600" />
                        </div>
                        <a
                           href="#"
                           className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                        >
                           <CheckIcon
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                           />
                           <span className="sr-only">{step.name}</span>
                        </a>
                     </>
                  ) : step.id === currentStep ? (
                     <>
                        <div
                           className="absolute inset-0 flex items-center"
                           aria-hidden="true"
                        >
                           <div className="ml-10 mr-2 h-0.5 w-full bg-red-600" />
                        </div>
                        <a
                           href="#"
                           className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-600 bg-black text-white opacity-10"
                           aria-current="step"
                        >
                           {step.id}
                           <span className="sr-only">{step.name}</span>
                        </a>
                     </>
                  ) : (
                     <>
                        <div
                           className="absolute inset-0 flex items-center"
                           aria-hidden="true"
                        >
                           <div className="ml-10 mr-2 h-0.5 w-full bg-gray-600" />
                        </div>
                        <a
                           href="#"
                           className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                        >
                           {step.id}
                           <span className="sr-only">{step.name}</span>
                        </a>
                     </>
                  )}
               </li>
            ))}
         </ol>
      </nav>
   )
}
