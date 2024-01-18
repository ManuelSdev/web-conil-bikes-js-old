import BookingStepper from '@/components/layouts/site/BookingStepper'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
   { id: '01', name: 'Job details', href: '#', status: 'complete' },
   { id: '02', name: 'Application form', href: '#', status: 'current' },
   { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
]

export default function Example({ children }) {
   return (
      <div className="pt-slimTopAppBar">
         {children}
         <MobileBottomAppBar />
      </div>
   )
}
