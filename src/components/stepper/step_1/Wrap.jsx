import { getAppBikesConfig } from '@/lib/pg-promise/crud/bikes'
import React from 'react'

export default function Wrap({ renderElem }) {
   const params = getAppBikesConfig()
   return renderElem(params)
}
