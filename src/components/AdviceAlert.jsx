import { Rocket } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function AdviceAlert({ title, description, className }) {
   return (
      <Alert className={className}>
         <Rocket className="h-4 w-4" />
         <AlertTitle>{title}</AlertTitle>
         <AlertDescription>{description}</AlertDescription>
      </Alert>
   )
}
