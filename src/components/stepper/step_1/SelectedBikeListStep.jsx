import React from 'react'
import SelectedBikeList from './SelectedBikeList'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'

export default function SelectedBikeListStep({ ...props }) {
   return (
      <div>
         <SelectedBikeList {...props} />
         <MobileBottomAppBar {...props} />
      </div>
   )
}
