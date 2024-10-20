'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
//import test from 'public/images/placeholder.png'

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
import { createRef, use } from 'react'
import InputImageFile from './InputImageFile'
import BasicCard from '@/components/BasicCard'
import da from 'date-fns/esm/locale/da/index.js'

const FormSchema = z.object({
   /*
   modelName: z.string().min(2, {
      message: 'El nombre del modelo debe tener, al menos, dos caracteres.',
   }),
*/
   image_0: z.any(),
   /*
      .refine(
         (files) => console.log('files zod -> ', files) || files?.length == 1,
         'Image is required.'
      )
      */
   image_1: z.any().optional(),
   image_2: z.any().optional(),
   image_3: z.any().optional(),
})
//https://react-hook-form.com/advanced-usage#ControlledmixedwithUncontrolledComponents

export function NewBikeForm() {
   const { uploadFiles } = useFirebaseStorage()

   const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         image_0: '',
         image_1: '',
         image_2: '',
         image_3: '',
      },
   })

   // const fileRef = form.register('image_0')
   const { ref, ...rest } = form.register('image_0')
   const { ref_1, ...rest_1 } = form.register('image_1')
   // console.log('REF -> ', ref)
   function onSubmist(data) {
      //   trigger(data.username)
      console.log('data -> ', data)
   }
   async function onSubmit(data, ev) {
      //   trigger(data.username)
      console.log('data -> ', data)
      console.log('ev -> ', ev)
      ev.preventDefault()

      console.log('data -> ', data)
      // ev.preventDefault()
      const { image_0, image_1 } = data
      const images = [image_0, image_1].filter((image) => !!image)
      //console.log('images -> ', images)
      //console.log('data -> ', data)
      //  console.log('ev -> ', ev)
      const downloadURLs = await uploadFiles(images)
      console.log('downloadURLs -> ', downloadURLs)
   }
   console.log('form -> ', form.getValues())
   //https://claritydev.net/blog/react-hook-form-multipart-form-data-file-uploads

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            //onSubmit={(a, b) => onSubmit(a, b)}
            className="w-2/3 space-y-6"
         >
            <FormField
               control={form.control}
               name="image_0"
               render={({ field }) => (
                  //     console.log('field -> ', field) ||
                  <FormItem>
                     <FormLabel>Image 0</FormLabel>
                     <FormControl>
                        <InputImageFile
                           type="file"
                           placeholder="shadcn"
                           //  {...rest}
                           {...field}
                           rest={rest}
                           ref={ref}
                        />
                     </FormControl>

                     <FormDescription>
                        This is your public display name.
                     </FormDescription>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button type="submit">Submitttt</Button>
         </form>
      </Form>
   )
}
