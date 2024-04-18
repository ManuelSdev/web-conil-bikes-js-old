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

export default function BasicCard({
   tittle,
   description,
   children,
   footer,
   className,
}) {
   return (
      <Card className={cn('max-w-fit', className)}>
         <CardHeader>
            <CardTitle>{tittle}</CardTitle>
            <CardDescription>{description} </CardDescription>
         </CardHeader>
         <CardContent>{children}</CardContent>
         <CardFooter>{footer}</CardFooter>
      </Card>
   )
}
