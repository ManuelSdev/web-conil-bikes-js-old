'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const FormSchema = z.object({
   search: z.string().min(1, {
      message: 'Username must be at least 2 characters.',
   }),
})
export function SearchUserForm({ onSubmit, className }) {
   const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         search: '',
      },
   })
   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={'flex grow items-center'}
         >
            <FormField
               control={form.control}
               name="search"
               render={({ field }) => (
                  <FormItem className="relative flex w-full items-center space-y-0">
                     <div className="absolute pl-3">
                        <MagnifyingGlassIcon
                           className="pointer-events-none h-full  w-5  text-gray-400"
                           aria-hidden="true"
                        />
                     </div>

                     {/* <FormLabel>Nombre completo</FormLabel>*/}
                     <FormControl>
                        <Input
                           placeholder="Buscar usuarios"
                           {...field}
                           className="pl-10"
                        />
                     </FormControl>
                     <div className="absolute right-0 pr-3">
                        <MagnifyingGlassIcon
                           className="pointer-events-none h-full  w-5  text-gray-400"
                           aria-hidden="true"
                        />
                     </div>
                     <FormMessage />
                  </FormItem>
               )}
            />

            {/*  <Button className="w-full" type="submit">
               Crear cuenta
               </Button>*/}
         </form>
      </Form>
   )
}
