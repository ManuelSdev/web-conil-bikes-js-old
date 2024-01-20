import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Cart() {
   return (
      <div className="fixed bottom-2 right-2 bg-red-200">
         <div className="relative">
            {' '}
            <div
               className=" absolute -right-2 -top-2 h-full w-full rounded-full bg-blue-600 p-1"
               variant="outline"
            >
               1
            </div>
            <ShoppingCart className="h-16 w-16 " />
         </div>
      </div>
   )
}
