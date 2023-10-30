import React, { useState } from 'react'

const FROM = 'from'
const TO = 'to'

export default function Stepper() {
   const [dateRange, setDateRange] = useState({ from: '', to: '' })
   const { from, to } = dateRange
   const handleChange = (picker) => (newValue) => {
      setDateRange({ ...dateRange, [picker]: newValue })
   }
   return <div>Stepper</div>
}
