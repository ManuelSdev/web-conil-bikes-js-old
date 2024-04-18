'use client'
import SpinnerRing from '@/components/common/SpinnerRing'
import { selectAppIsLoadingPage } from '@/lib/redux/slices/appConfigSlice'
import React from 'react'
import { useSelector } from 'react-redux'

export default function LoaderPageContainer({ children }) {
   const isLoading = useSelector(selectAppIsLoadingPage)
   return <SpinnerRing />
   return isLoading ? <SpinnerRing /> : children
}
