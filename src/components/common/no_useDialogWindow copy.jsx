import { useState } from 'react'

export default function no_useDialogWindow(initialDialog) {
   const initialDialogState = initialDialog
      ? initialDialog
      : {
           open: false,
           title: 'title',
           description: 'description',
           actionText: 'actionText',
           closeText: 'closeText',
           handleAction: () => {},
        }

   const [dialog, setDialog] = useState(initialDialogState)

   const toggleDialog = (bool) => setDialog({ ...dialog, open: bool })

   const [onOpenChangeWrapper, setOnOpenChange] = useState({
      onOpenChange: toggleDialog,
   })
   const { onOpenChange } = onOpenChangeWrapper

   //  const [onOpenChange, setOnOpenChange] = useState(toggleDialog)
   /**
    *
    */

   return { dialog, setDialog, toggleDialog, onOpenChange, setOnOpenChange }
}
