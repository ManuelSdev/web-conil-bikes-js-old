import { getStorage, ref, uploadBytes } from 'firebase/storage'
import React from 'react'
import { app } from './firebaseClient'
import { v4 as uuidv4 } from 'uuid'

export default function useFirebaseStorage() {
   // Get a reference to the storage service, which is used to create references
   // in your storage bucket
   const storage = getStorage(app)
   // Create a storage reference from our storage service
   // const storageRef = ref(storage)

   const fileId = uuidv4()
   const storageRef = ref(
      storage,
      `uploads/${fileId}/${file[0].originalFilename}`
   )
   const trigger = async (file) => {
      try {
         const result = await uploadBytes(storageRef, file)
         console.log('Uploaded a blob or file! - ', result)
      } catch (error) {
         console.log('Error uploading file - ', error)
      }
   }

   return { trigger }
}
