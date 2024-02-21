'use client'

import React, { useEffect, useState } from 'react'
import { useTransition } from 'react';

export default function Tras() {
    const [isPending, startTransition] = useTransition();
    const [first, setfirst] = useState(second)
    function handleClick(index) {
        startTransition(() => {
          setTab(index);
          setResource(fetchData());
        });
        useEffect(() => {
          
        
          return () => {
            second
          }
        }, [third])
        
  return (
    <div>Tras</div>
  )
}
