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
} from '@/components/table/table'
import clsx from 'clsx'
export default function DataGrid({ tablePanel, headLabels, tableRows }) {
   return (
      <div className="px-4 sm:px-6 lg:px-8">
         {tablePanel && (
            <TablePanel
               title={tablePanel.title}
               description={tablePanel.description}
            />
         )}
         <TableWrapper>
            <Table>
               <TableHeader>
                  <TableRow>
                     {headLabels.map((label, idx) => {
                        const lastIdx = headLabels.length - 1
                        return (
                           <TableHead
                              key={idx}
                              className={clsx({
                                 'pl-4 pr-3 sm:pl-6': idx === 0,
                                 'relative py-3.5 pl-3 pr-4 sm:pr-6':
                                    lastIdx === idx,
                              })}
                           >
                              {label}
                           </TableHead>
                        )
                     })}
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {tableRows.map((row, idx) => (
                     <TableRow key={idx}>
                        {row.map((cell, idx2) => {
                           const lastIdx = row.length - 1
                           return (
                              <TableCell
                                 key={idx2}
                                 className={clsx({
                                    'pl-4 pr-3 sm:pl-6': idx2 === 0,
                                    'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6':
                                       lastIdx === idx2,
                                 })}
                              >
                                 {cell}
                              </TableCell>
                           )
                        })}
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableWrapper>
      </div>
   )
}
