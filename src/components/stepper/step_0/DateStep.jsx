import DatePicker from '@/components/datepicker/DatePicker'
import MobileBottomAppBar from '@/components/layouts/site/MobileBottomAppBar'
import React from 'react'

const FROM = 'from'
const TO = 'to'

export default function DateStep({ from, to, handleSelect, ...props }) {
   return (
      <div className="flex justify-center gap-5">
         <DatePicker
            label="Inicio"
            date={from}
            handleSelect={handleSelect(FROM)}
         />
         <DatePicker label="Fin" date={to} handleSelect={handleSelect(TO)} />
      </div>
   )
}

/*<MobileBottomAppBar {...props} />*/
