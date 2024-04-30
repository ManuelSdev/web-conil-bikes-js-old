'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import test from 'public/images/placeholder.png'

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
import { InputFile } from '@/components/common/InputFile'
import useFirebaseStorage from '@/lib/firebase/client/useFirebaseStorage'
import Image from 'next/image'
import { createRef } from 'react'
import InputImageFile from '../bike/InputImageFile'

const FormSchema = z.object({
   username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
})
//https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents

export function LoadImageForm() {
   //  const { trigger } = useFirebaseStorage()
   const form = useForm({
      //   resolver: zodResolver(FormSchema),
      defaultValues: {
         image_0: '',
      },
   })
   const { ref, ...rest } = form.register('image_0')
   console.log('REF -> ', ref)
   function onSubmist(data) {
      //   trigger(data.username)
   }

   function onSubmit(data, ev) {
      //   trigger(data.username)
      ev.preventDefault()
      console.log('data -> ', data)
      console.log('ev -> ', ev)
   }
   console.log('form -> ', form.getValues())
   //https://claritydev.net/blog/react-hook-form-multipart-form-data-file-uploads

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            //  onSubmit={onSubmit}
            className="w-2/3 space-y-6"
         >
            <FormField
               control={form.control}
               name="image_0"
               render={({ field: { value, onChange, ...field } }) =>
                  console.log('field -> ', field) || (
                     <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl>
                           <InputImageFile
                              ref={ref}
                              onChange={onChange}
                              value={value}
                              {...field}
                           />
                        </FormControl>
                        <FormDescription>
                           This is your public display name.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )
               }
            />
            <Button type="submit">Submit</Button>
         </form>
      </Form>
   )
}
