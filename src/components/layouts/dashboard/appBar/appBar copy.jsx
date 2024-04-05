const { cn } = require('@/utils/app/functions')

const BarHeader = ({ className, ...props }) => {
   return (
      <header
         className={cn('HEADER sticky top-0 z-40 w-full bg-black', className)}
         {...props}
      />
   )
}

const BarNav = ({ className, ...props }) => {
   return (
      <nav
         className={cn('NAV mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
         {...props}
      />
   )
}
const BarWrapper = ({ className, ...props }) => {
   return (
      <div
         className={cn(
            'WRAPPER flex h-slimTopAppBar items-center justify-between gap-8 md:h-fatTopAppBar',
            className
         )}
         {...props}
      />
   )
}

const BarLeftBlock = ({ className, ...props }) => {
   return (
      <div
         className={cn(
            'LEFT-BLOCK flex w-full items-center justify-between',
            className
         )}
         {...props}
      />
   )
}
const BarLogoMenuBlock = ({ className, ...props }) => (
   <div className="flex-shrink-0">
      <div className="flex items-center" {...props} />
   </div>
)

const BarItems = ({ className, ...props }) => (
   <div className="BUTTONS hidden md:block ">
      <div
         className={cn(
            'hidden h-slimTopAppBar sm:-my-px sm:ml-6 sm:flex sm:space-x-8  md:h-fatTopAppBar',
            className
         )}
         {...props}
      />
   </div>
)

const BarRightBlock = ({ className, ...props }) => {
   return (
      <div
         className={cn('ml-4 flex items-center md:ml-6', className)}
         {...props}
      />
   )
}

export {
   BarHeader,
   BarNav,
   BarWrapper,
   BarLeftBlock,
   BarLogoMenuBlock,
   BarItems,
   BarRightBlock,
}
