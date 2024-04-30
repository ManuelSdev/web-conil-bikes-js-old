import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useRef } from 'react'
import test from 'public/images/placeholder.png'

export default function InputImageFile({ ref, onChange, value, ...props }) {
   console.log('ref -> ', ref)
   // if (!ref) return null
   const inputRef = useRef(null)

   const handleClick = () => {
      //ref.onClick()
      //   console.log('ref -> ', ref.current)
      inputRef.current.click()
   }
   return (
      <div>
         <Input
            accept="image/*"
            className="hidden"
            placeholder="shadcn"
            type="file"
            //     ref={form.register}
            {...props}
            value={value?.fileName}
            onChange={(event) => {
               //  console.log('event -> ', event.target.files[0])
               onChange(event.target.files[0])
            }}
            ref={(e) => {
               //https://stackoverflow.com/questions/71495923/how-to-use-the-ref-with-the-react-hook-form-react-library
               //https://www.react-hook-form.com/faqs/#Howtosharerefusage
               ref(e)
               inputRef.current = e // you can still assign to ref
            }}
         />
         <Image
            onClick={handleClick}
            src={test}
            alt=""
            width="200"
            height="200"
         />
      </div>
   )
}
