import MailIcon from '@mui/icons-material/Mail'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import GroupIcon from '@mui/icons-material/Group'
export const drawerWidth = 240
export const drawerContent = [
   {
      title: 'Calendario',
      icon: <CalendarMonthIcon />,
      href: '/dashboard/bookings/calendar',
   },
   {
      title: 'Bicicletas',
      icon: <PedalBikeIcon />,
      href: '/dashboard/bikes',
   },
   {
      title: 'Usuarios',
      icon: <GroupIcon />,
      href: '/customers',
   },
   {
      title: 'Products',
      icon: <MailIcon />,
      href: '/products',
   },
   {
      title: 'Settings',
      icon: <MailIcon />,
      href: '/settings',
   },
]
