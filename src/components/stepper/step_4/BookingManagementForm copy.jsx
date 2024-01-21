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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookingManagement } from '@/lib/redux/slices/bookingFormSlice'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import { useRouter } from 'next/navigation'

const FormSchema = z.object({
   address: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
   }),
   delivery: z.boolean(),
   pickup: z.boolean(),
})

export function BookingManagementForm({ step, dateRange }) {
   const router = useRouter()
   const bookingManagement = useSelector(selectBookingManagement)

   const dispatch = useDispatch()
   const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
         ...bookingManagement,
      },
   })
   const { address, delivery, pickup } = form.getValues()
   function onSubmit(data) {
      //console.log('data -> ', data)
   }
   const handleNext = () => {
      router.push(`/booking?step=3&date=${dateRange}`)
   }
   const handlePrev = () => {
      router.push(`/booking?step=1&date=${dateRange}`)
   }

   return (
      <div>
         {' '}
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="w-2/3 space-y-6"
            >
               <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                           <Input placeholder="Dirección" {...field} />
                        </FormControl>
                        <FormDescription>
                           Indica cual será tu dirección durante la reserva.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="delivery"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>
                           ¿Recogerás las bicis en nuestra tienda o prefieres
                           que te las entreguemos en tu dirección?
                        </FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value={false} />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Recogida en tienda
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value={true} />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Entrega a domicilio
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="pickup"
                  render={({ field }) => (
                     <FormItem className="space-y-3">
                        <FormLabel>
                           Entrega de bicicletas al finalizar la reserva
                        </FormLabel>
                        <FormControl>
                           <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                           >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value={false} />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Entrega en tienda
                                 </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                 <FormControl>
                                    <RadioGroupItem value={true} />
                                 </FormControl>
                                 <FormLabel className="font-normal">
                                    Recogida a domicilio
                                 </FormLabel>
                              </FormItem>
                           </RadioGroup>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit">Submit</Button>
            </form>
         </Form>
         <MobileBottomAppBar
            disabled={!address}
            handleNext={handleNext}
            handlePrev={handlePrev}
         />
      </div>
   )
}
