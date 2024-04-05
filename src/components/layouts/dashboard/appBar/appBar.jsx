const { cn } = require('@/utils/app/functions')

const BarHeader = ({ className, ...props }) => {
   return (
      <header
         className={cn(
            'HEADER sticky top-0 z-40 w-full bg-black lg:pl-72',
            className
         )}
         {...props}
      />
   )
}

const BarNav = ({ className, ...props }) => {
   return (
      <nav
         className={cn(
            'NAV mx-auto flex h-slimTopAppBar max-w-7xl items-center gap-8  px-4 sm:px-6 md:h-fatTopAppBar lg:px-8',
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
   <div
      className={cn('flex flex-1 gap-x-4 self-stretch  lg:gap-x-6', className)}
      {...props}
   />
)

const BarRightBlock = ({ className, ...props }) => {
   return (
      <div
         className={cn('ml-4 flex items-center md:ml-6', className)}
         {...props}
      />
   )
}

export { BarHeader, BarNav, BarLogoMenuBlock, BarItems, BarRightBlock }
