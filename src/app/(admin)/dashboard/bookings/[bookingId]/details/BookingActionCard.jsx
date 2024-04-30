import React from 'react'
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card'
import { cn } from '@/utils/app/functions'
import { Info } from 'lucide-react'

export default function BookingActionCard({
   tittle,
   description,
   children,
   footer,
   className,
   info,
}) {
   return (
      <Card className={cn('max-w-none', className)}>
         <CardHeader>
            <CardTitle className="text-lg">{tittle}</CardTitle>
            <CardDescription>{description}</CardDescription>
         </CardHeader>

         <CardContent>{children}</CardContent>
         <CardFooter>{footer}</CardFooter>
      </Card>
   )
}
/*
 <div className="mt-2 flex items-center">
                  <Info className="mr-2 " />
                  {info}
               </div>{' '}
               */
