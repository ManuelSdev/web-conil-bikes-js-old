import React from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import { cn } from '@/utils/app/functions'
export default function Social(className) {
   return (
      <div className="flex justify-evenly">
         {[Instagram, Twitter, Facebook].map((Icon, index) => (
            <Icon
               key={index}
               className="h-6 w-6"
               color="#D5FF40"
               //   fill="red"
            />
         ))}
      </div>
   )
}
