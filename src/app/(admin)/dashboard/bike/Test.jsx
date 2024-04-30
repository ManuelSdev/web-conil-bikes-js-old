'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Test() {
   const { register, handleSubmit } = useForm()
   const onSubmit = (data) => {
      console.log(data)
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input name="username" type="file" />
         <button>Submit</button>
      </form>
   )
}
