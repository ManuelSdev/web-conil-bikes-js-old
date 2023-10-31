import { createContext, useState } from 'react'

const BookingFormContext = createContext(null)

import React from 'react'

export default function BookingFormProvider({ children }) {
   const [bookingForm, setBookingForm] = useState({})
   return (
      <BookingFormContext.Provider
         value={{
            bookingForm,
            setBookingForm,
         }}
      >
         {children}
      </BookingFormContext.Provider>
   )
}
