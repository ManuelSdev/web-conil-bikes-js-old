import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useRef } from 'react'
import placeholder from '/public/images/placeholder.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { pl } from 'date-fns/locale'

const InputImageFile = React.forwardRef(
   ({ onChange, value, ...props }, ref) => {
      console.log('props -> ', props)
      //console.log('ref -> ', ref)
      // if (!ref) return null
      // console.log('value -> ', value)
      const inputRef = useRef(null)
      const [src, setSrc] = useState()

      const handleInputChange = (e) => {
         console.log('e -> ', e)
         const file = e.target.files[0]
         if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
               setSrc(reader.result)
            }
            reader.readAsDataURL(file)
            onChange(file)
         }
      }

      const onImageClick = () => {
         //ref.onClick()
         //   console.log('refeeeeeeeee -> ', ref.current)
         inputRef.current.click()
      }
      return (
         <div className="w-12">
            <Input
               accept="image/*"
               className="hidden"
               placeholder="shadcn"
               type="file"
               //     ref={form.register}
               {...props}
               value={value?.fileName}
               onChange={handleInputChange}
               ref={(e) => {
                  //https://stackoverflow.com/questions/71495923/how-to-use-the-ref-with-the-react-hook-form-react-library
                  //https://www.react-hook-form.com/faqs/#Howtosharerefusage
                  ref(e)
                  inputRef.current = e // you can still assign to ref
               }}
            />
            <Image
               onClick={onImageClick}
               src={src || placeholder}
               alt=""
               width="200"
               height="200"
            />
         </div>
      )
   }
)
InputImageFile.displayName = 'InputImageFile'

export default InputImageFile

/*
      CLAVE
      //https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react

      useEffect(() => {
         if (!selectedFile) {
            setPreview(undefined)
            return
         }

         const objectUrl = URL.createObjectURL(selectedFile)
         setPreview(objectUrl)

         // free memory when ever this component is unmounted
         return () => URL.revokeObjectURL(objectUrl)
      }, [selectedFile])

      const onSelectFile = (e) => {
         if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
         }

         // I've kept this example simple by using the first image instead of multiple
         setSelectedFile(e.target.files[0])
      }
      */
