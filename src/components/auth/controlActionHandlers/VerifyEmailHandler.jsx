'use client'
import { applyActionCode } from 'firebase/auth'
import React from 'react'

export default async function VerifyEmailHandler({ auth, actionCode }) {
   // const verifyCodeResp = await applyActionCode(auth, actionCode)
   return <div>VerifyEmailHandler</div>
}
