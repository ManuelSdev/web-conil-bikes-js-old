'use client'
import React from 'react'
import { sidebarContent } from '@/custom/sidebarContent'
import SiteShell from './SiteShell'

export default function SiteLayout({ children }) {
   return <SiteShell sidebarContent={sidebarContent}>{children}</SiteShell>
}
