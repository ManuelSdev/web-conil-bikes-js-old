import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const defaultValues = {
   select: '',
   input: '',
}

function App() {
   const { handleSubmit, reset, watch, control, register } = useForm({
      defaultValues,
   })
   const onSubmit = (data) => console.log(data)

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         {/*
         <Controller

            render={({ field }) => (
               <Select {...field}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
               </Select>
            )}
            control={control}
            name="select"
            defaultValue={10}
         />
*/}
         <Input {...register('input')} />

         <input type="submit" />
      </form>
   )
}
