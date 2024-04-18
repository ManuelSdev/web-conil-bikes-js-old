import Stepper from '@/components/stepper/Stepper'

import {
   getAdminData,
   getAdminId,
   getAdminUserAuth,
   getAppBikeSegments,
} from '@/utils/serverFns/serverFns'
import React from 'react'
import BookingResumeHandler from '@/components/stepper/resume/BookingResumeHandler'
import { getUserByIdentifier } from '@/lib/pg/crud/users'
import { findUserByIdentifier } from '@/lib/pg/repos/users'

export default async function DashboardResumeStepPage({
   params,
   searchParams,
}) {
   const adminId = await getAdminId()
   // const adminData = await adminDataRes.json()
   console.log('#### adminData ', adminId)
   const { segmentList } = await getAppBikeSegments()
   const { userId } = searchParams

   const [user] = await findUserByIdentifier(userId)
   //const [user] = await userRes.json()
   //console.log('user en DashboardResumeStepPage -> ', userRes)

   return <BookingResumeHandler isAdmin={true} user={user} adminId={adminId} />
}
