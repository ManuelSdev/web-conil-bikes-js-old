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
import { CircleUserRound, Info } from 'lucide-react'

export default function UserCard({
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
            <CardTitle className="flex gap-4 text-lg">
               <CircleUserRound />
               {tittle}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
         </CardHeader>

         <CardContent>{children}</CardContent>
         <CardFooter>{footer}</CardFooter>
      </Card>
   )
}
