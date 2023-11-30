import { query } from '../db'

export const findBookingDatesInRange = async (dateRange) => {
   const text = 'SELECT * FROM find_booking_dates_in_range($1)'
   const values = [dateRange]
   const rowMode = 'array'
   const {
      rows: [bookingDates],
   } = await query({ text, values })
   bookingDates.startDates ??= []
   bookingDates.endDates ??= []
   bookingDates.startEndDates ??= []
   return bookingDates
}

export const findBookingOnDate = async (date) => {
   const text = 'SELECT * FROM find_booking_on_date($1)'
   const values = [date]
   const rowMode = 'array'
   const { rows } = await query({ text, values })
   //array de objetos
   //console.log('rows en findBookingOnDate -> ', rows)
   return rows
}

export const findBookingById = async (bookingId) => {
   const text = 'SELECT * FROM find_booking_by_id($1)'
   const values = [bookingId]
   const rowMode = 'array'
   const {
      rows: [booking],
   } = await query({ text, values })
   booking.dateRange = JSON.parse(booking.dateRange)
   console.log('booking en findBookingById -> ', booking)
   return booking
}

export const findBookingBikesById = async (bookingId) => {
   const text = 'SELECT * FROM find_booking_bikes_by_id($1)'
   const values = [bookingId]
   const rowMode = 'array'
   const { rows } = await query({ text, values })
   //array de objetos
   console.log('rows en findBookingBikesById -> ', rows)
   return rows
}
export const addBooking = async ({
   bikes,
   userId,
   isAdmin,
   dateRange,
   address,
   price,
   email,
   delivery,
   pickup,
   duration,
}) => {
   const jsonBikes = JSON.stringify(bikes)
   const strJsonBikes = `${jsonBikes}`
   console.log('strJsonBikes en addBooking -> ', strJsonBikes)
   const text =
      'CALL add_booking($1::text, $2::INTEGER, $3::BOOLEAN, $4::tstzrange, $5::TEXT, $6::SMALLINT, $7::TEXT, $8::BOOLEAN, $9::BOOLEAN,$10::SMALLINT, null)'
   const values = [
      strJsonBikes,
      userId,
      isAdmin,
      dateRange,
      address,
      price,
      email,
      delivery,
      pickup,
      duration,
   ]

   const rowMode = 'array'
   const { rows } = await query({ text, values })
   console.log(
      'rows en addBooking @@@@@@@@@@@@@@@@@ #####################-> ',
      rows
   )
   return rows
}

const a = {
   'bikes': [{ 'modelId': 25, 'bikeSize': 'm', 'quantity': 1 }],
   'userId': 1,
   'isAdmin': true,
   'dateRange': '[2023-11-09T23:00:00.000Z,2023-11-21T23:00:00.000Z]',
   'address': 'C/ Santa Lucia (Los molinos) 55',
   'price': 12,
   'email': 'vivaperrita@gmail.com',
   'delivery': false,
   'pickup': false,
   'duration': 43,
}
