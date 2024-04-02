//import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export function ErrorAlert({ title, description, className }) {
   return (
      <Alert variant="destructive" className={className}>
         <ExclamationTriangleIcon className="h-4 w-4" />
         <AlertTitle>{title}</AlertTitle>
         <AlertDescription>{description}</AlertDescription>
      </Alert>
   )
}
