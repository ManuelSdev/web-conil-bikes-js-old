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
import React from 'react'

const FormSchema = (email) =>
   z.object({
      name: z.string().min(2, {
         message: 'Username must be at least 2 characters.',
      }),
      phone: z.string().min(9, {
         message: 'El teléfono debe tener al menos 9 cifras',
      }),
      email: z
         .string()
         .email()
         .refine((val) => val !== email, {
            message: 'El correo electrónico pertenece a un usuario existente',
         }),
   })

export function NewUserForm({ onSubmit, searchParams }) {
   //const { phone, email, name } = searchParams
   //console.log('NewUserForm onSubmit ->', onSubmit)
   const form = useForm({
      resolver: zodResolver(FormSchema(searchParams?.email || '')),
      defaultValues: {
         name: searchParams?.name ? searchParams.name : '',
         phone: searchParams?.phone ? searchParams.phone : '',
         email: searchParams?.email ? searchParams.email : '',
      },
   })
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="w-f space-y-6">
            <FormField
               control={form.control}
               name="name"
               render={({ field }) => (
                  <FormItem className="group relative z-0 ">
                     <FormLabel>Nombre completo</FormLabel>
                     <FormControl>
                        <Input placeholder="shadcn" {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="phone"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Teléfono</FormLabel>
                     <FormControl>
                        <Input placeholder="shadcn" {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Correo eléctronico</FormLabel>
                     <FormControl>
                        <Input placeholder="shadcn" {...field} />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button className="w-full" type="submit">
               Crear usuario
            </Button>
         </form>
      </Form>
   )
}
