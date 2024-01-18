'use client'
import { selectVar, varChanged } from '@/lib/redux/slices/bookingFormSlice'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TestUno() {
   const dispatch = useDispatch()
   const va = useSelector(selectVar)

   return (
      <div>
         <Link href="/test/b">ir a page B</Link>
         <div>
            <button onClick={() => dispatch(varChanged('hola'))}>
               {' '}
               cambiar var
            </button>
         </div>

         <div>Valor va: {va}</div>
      </div>
   )
}
