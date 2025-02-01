import React from 'react'
import { drawerContent } from './drawerContent'
import DesktopDrawer from './DesktopDrawer'

export default function DrawerController() {
   return <DesktopDrawer content={drawerContent} />
}
