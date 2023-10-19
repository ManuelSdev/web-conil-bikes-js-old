'use client'
import React from 'react'
import Dashboard from './DashboardShell'
import { sidebarContent } from '@/custom/sidebarContent'

export default function AdminDashboardLayout({ children }) {
   return <Dashboard sidebarContent={sidebarContent}>{children}</Dashboard>
}
