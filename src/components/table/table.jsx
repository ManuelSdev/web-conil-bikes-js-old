import { cn } from '@/utils/app/functions'
import { default as React } from 'react'

const TablePanel = ({ title, description }) => (
   <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
         <h1 className="text-base font-semibold leading-6 text-gray-900">
            {title}
         </h1>
         <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
         <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
            Add user
         </button>
      </div>
   </div>
)

const TableWrapper = (props) => (
   <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
         <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div
               className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
               {...props}
            />
         </div>
      </div>
   </div>
)

const Table = ({ className, ...props }) => (
   <table
      className={cn('min-w-full divide-y divide-gray-300', className)}
      {...props}
   />
)

const TableHeader = ({ className, ...props }) => (
   <thead className={cn('bg-gray-50', className)} {...props} />
)

const TableRow = ({ className, ...props }) => (
   <tr className={className} {...props} />
)

const TableHead = ({ className, ...props }) => (
   <th
      scope="col"
      className={cn(
         'px-3 py-3.5 text-left text-sm font-semibold text-gray-900',
         className
      )}
      {...props}
   />
)

const TableBody = ({ className, ...props }) => (
   <tbody className={cn('divide-y divide-gray-200 bg-white')} {...props} />
)

const TableCell = ({ className, ...props }) => (
   <td
      className={cn(
         'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
         className
      )}
      {...props}
   />
)

export {
   TablePanel,
   TableWrapper,
   Table,
   TableHeader,
   TableRow,
   TableHead,
   TableBody,
   TableCell,
}
