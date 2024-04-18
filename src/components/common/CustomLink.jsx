'use client'

import { useEffect, useTransition } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import SpinnerRing from './SpinnerRing'
import { useDispatch } from 'react-redux'
import { appIsloadingPage } from '@/lib/redux/slices/appConfigSlice'

/**
 * A custom Link component that wraps Next.js's next/link component.
 * https://github.com/vercel/next.js/discussions/41934#discussioncomment-8996669
 */
export function CustomLink({ href, children, replace, ...rest }) {
   const router = useRouter()
   const dispatch = useDispatch()
   const [isPending, startTransition] = useTransition()

   if (isPending) {
      //   return <SpinnerRing />
   }
   useEffect(() => {
      isPending && dispatch(appIsloadingPage(true))

      return () => {
         // second
      }
   }, [isPending])

   return (
      <NextLink
         href={href}
         onClick={(e) => {
            e.preventDefault()
            startTransition(() => {
               const url = href.toString()
               if (replace) {
                  router.replace(url)
               } else {
                  router.push(url)
               }
            })
         }}
         {...rest}
      >
         {children}
      </NextLink>
   )
}
