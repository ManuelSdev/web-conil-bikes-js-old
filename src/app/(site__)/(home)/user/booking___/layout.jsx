import BookingStepper from '@/components/layouts/site/BookingStepper'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import ReduxProviderWrapper from '@/lib/redux/ReduxProviderWrapper'
import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
   { id: '01', name: 'Job details', href: '#', status: 'complete' },
   { id: '02', name: 'Application form', href: '#', status: 'current' },
   { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example({
   step_0_dates,
   step_1a_bikes,
   step_1b_bikes,

   step_2_data,
   step_3_resume,
   ...props
}) {
   return (
      <ReduxProviderWrapper>
         <div className="pt-slimTopAppBar">
            {step_0_dates}
            {step_1a_bikes}
            {step_1b_bikes}
            {step_2_data}
            {step_3_resume}
         </div>
      </ReduxProviderWrapper>
   )
}
