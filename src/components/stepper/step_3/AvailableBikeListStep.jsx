import React from 'react'
import AvailableBikesList from './AvailableBikeList'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'

export default function AvailableBikeListStep(props) {
   return (
      <div>
         <AvailableBikesList {...props} />
         <MobileBottomAppBar {...props} />
      </div>
   )
}
