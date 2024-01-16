import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import React from 'react'
import BikeFiltersForm from './BikeFiltersForm'

export default function BikeFiltersStep(props) {
   return (
      <div>
         <BikeFiltersForm {...props} />
         {/*     <MobileBottomAppBar {...props} />*/}
      </div>
   )
}
