import React from 'react'
import DesktopDrawer from './DesktopDrawer'
import MobileDrawer from './MobileDrawer'

export default function Drawer(props) {
   return (
      <div>
         <DesktopDrawer {...props} />
         <MobileDrawer {...props} />
      </div>
   )
}
