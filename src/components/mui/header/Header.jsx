'use client'
import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'

import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import MenuOpenIcon from '@mui/icons-material/MenuOpen'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   variants: [
      {
         props: ({ open }) => open,
         style: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
               easing: theme.transitions.easing.sharp,
               duration: theme.transitions.duration.enteringScreen,
            }),
         },
      },
   ],
}))

export default function Header({
   open,
   handleDesktopDrawerOpen,
   handleDesktopDrawerClose,
   handleDrawerToggle,
}) {
   console.log('open', open)
   return (
      <AppBar position="fixed">
         <Toolbar>
            {/*mobile drawer button*/}
            <IconButton
               color="inherit"
               aria-label="open drawer"
               edge="start"
               onClick={handleDrawerToggle}
               sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            >
               <MenuIcon />
            </IconButton>
            {/*desktop drawer buttons*/}
            {open || (
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDesktopDrawerOpen}
                  edge="start"
                  sx={[
                     {
                        marginRight: 5,
                        display: { xs: 'none', sm: 'inline-flex' },
                     },
                     // { display: { xs: 'none', sm: 'block' } },
                     // open && { display: 'none' },
                  ]}
               >
                  <MenuIcon />
               </IconButton>
            )}

            {open && (
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDesktopDrawerClose}
                  edge="start"
                  sx={[
                     {
                        // display: { xs: 'none', sm: 'block' },
                        marginRight: 5,
                     },
                     { display: { xs: 'none', sm: 'inline-flex' } },
                     //open || { display: 'none' },
                  ]}
               >
                  <MenuOpenIcon />
               </IconButton>
            )}
            <Typography variant="h6" noWrap component="div">
               Conil Bikes CRM 1.0
            </Typography>
         </Toolbar>
      </AppBar>
   )
}
