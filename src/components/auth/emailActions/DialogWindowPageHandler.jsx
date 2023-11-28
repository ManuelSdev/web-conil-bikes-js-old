'use client'

import React from 'react'
import useDialogWindow from '../../common/useDialogWindow'
import { DialogWindow } from '../../common/DialogWindow'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DialogWindowPageHandler({
   initialDialog,
   onOpenChangeLink,
}) {
   const router = useRouter()

   const { dialog, setDialog, toggleDialog, onOpenChange, setOnOpenChange } =
      useDialogWindow()

   useEffect(() => {
      onOpenChangeLink &&
         setOnOpenChange({
            onOpenChange: (bool) => router.push(onOpenChangeLink),
         })
      initialDialog && setDialog(initialDialog)
   }, [])

   return <DialogWindow {...dialog} onOpenChange={onOpenChange} />
}
