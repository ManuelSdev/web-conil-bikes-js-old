import React from 'react'

const AdminPageShell = (props) => (
   <div className="px-4 sm:px-12 lg:px-14" {...props} />
)

const AdminPageHeader = (props) => (
   <div className="flex items-center justify-between space-y-2" {...props} />
)

const AdminPageHeaderTitle = (props) => (
   <h2 className="text-3xl font-bold tracking-tight" {...props} />
)

const AdminPageHeaderButtons = (props) => (
   <div className="flex items-center space-x-2" {...props} />
)
const AdminPageContent = (props) => <div className="pt-4" {...props} />
export {
   AdminPageShell,
   AdminPageHeaderButtons,
   AdminPageHeader,
   AdminPageHeaderTitle,
   AdminPageContent,
}
