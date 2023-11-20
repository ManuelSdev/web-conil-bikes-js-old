import { useState } from 'react'

export default function useDialogWindow(initialDialog) {
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

   return { dialog, setDialog, toggleDialog }
}
