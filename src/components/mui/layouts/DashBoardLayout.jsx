'use client'
import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'

import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import { Button, Container, List } from '@mui/material'
import Link from 'next/link'
//import ListItems from '@/app/(dashboard)/fire/ListItems'
import { drawerContent } from '../drawer/drawerContent'
import Header from '../header/Header'
import Drawer from '../drawer/Drawer'

const drawerWidth = 240

const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end',
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
}))

export default function DashBoardLayout(props) {
   const theme = useTheme()
   const [open, setOpen] = React.useState(false)

   const handleDesktopDrawerOpen = () => {
      setOpen(true)
   }

   const handleDesktopDrawerClose = () => {
      setOpen(false)
   }

   const [mobileOpen, setMobileOpen] = React.useState(false)
   const [isClosing, setIsClosing] = React.useState(false)

   const handleDrawerClose = () => {
      setIsClosing(true)
      setMobileOpen(false)
   }

   const handleDrawerTransitionEnd = () => {
      setIsClosing(false)
   }

   const handleDrawerToggle = () => {
      if (!isClosing) {
         setMobileOpen(!mobileOpen)
      }
   }
   console.log('open', open)
   return (
      <Box sx={{ display: 'flex' }}>
         <CssBaseline />
         <Header
            drawerWidth={drawerWidth}
            open={open}
            handleDesktopDrawerOpen={handleDesktopDrawerOpen}
            handleDesktopDrawerClose={handleDesktopDrawerClose}
            handleDrawerToggle={handleDrawerToggle}
         />

         <Drawer
            open={open}
            drawerWidth={drawerWidth}
            theme={theme}
            content={drawerContent}
            handleDrawerClose={handleDrawerClose}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            handleDrawerToggle={handleDrawerToggle}
         />

         <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
            <DrawerHeader />
            {/*  <Typography sx={{ marginBottom: 2 }}>
               Test de carga de usuarios
            </Typography>*/}

            {props.children}
         </Box>
      </Box>
   )
}
