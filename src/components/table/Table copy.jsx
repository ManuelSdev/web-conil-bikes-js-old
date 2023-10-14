// @ts-nocheck
import React from 'react'
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TablePanel,
   TableRow,
   TableWrapper,
} from './Elements'

const people = [
   {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
   },
   // More people...
]

export default function Tables() {
   return (
      <div className="px-4 sm:px-6 lg:px-8">
         <TablePanel
            title={'Users'}
            description={
               'A list of all the users in your account including their name, title, email and role.'
            }
         />
         <TableWrapper>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead className={'pl-4 pr-3 sm:pl-6'}>Name</TableHead>
                     <TableHead>Title</TableHead>
                     <TableHead>Email</TableHead>
                     <TableHead>Role</TableHead>
                     <TableHead className={'relative py-3.5 pl-3 pr-4 sm:pr-6'}>
                        <span className="sr-only">Edit</span>
                     </TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {people.map((person) => (
                     <TableRow key={person.email}>
                        <TableCell className={'pl-4 pr-3 sm:pl-6'}>
                           {person.name}
                        </TableCell>
                        <TableCell>{person.title}</TableCell>
                        <TableCell>{person.email}</TableCell>
                        <TableCell>{person.role}</TableCell>
                        <TableCell
                           className={
                              'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                           }
                        >
                           <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                           >
                              Edit
                              <span className="sr-only">, {person.name}</span>
                           </a>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </div>
   )
}
