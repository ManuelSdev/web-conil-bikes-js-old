import pool, { query } from '../db'
import { addBookingText } from '../textSql/bookings/addBooking'

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
   //console.log('date en findBookingOnDate -> ', date)
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
   //console.log('booking en findBookingById -> ', booking)
   return booking
}

export const findBookingBikesById = async (bookingId) => {
   const text = 'SELECT * FROM find_booking_bikes_by_id($1)'
   const values = [bookingId]
   const rowMode = 'array'
   const { rows: bikes } = await query({ text, values })
   //array de objetos
   //console.log('rows en findBookingBikesById -> ', bikes)
   return bikes
}
export const addBooking_ = async ({
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
   //console.log('strJsonBikes en addBooking -> ', strJsonBikes)
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

   const res = await query({ text, values })
   //console.log('res en addBooking @@@-> ', res)
   const { rows } = res
   //console.log('rows en addBooking @@@@-> ', rows)
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

export const addBooking = async (data) => {
   const text = addBookingText(data)
   // console.log('text en addBooking', text)
   const client = await pool.connect()
   try {
      await client.query('BEGIN')
      //console.log('@@@@@@@@@@@+++++++ query text en addBooking', text)
      const { rows } = await client.query(text)
      await client.query('COMMIT')
      const [{ bookingId }] = rows
      return { bookingId }
      //  const [{ booking_id: bookingId }] = rows
      //console.log('@@@@@@@@@@@+++++++ response en addBooking', rows)
      res.status(201).json(bookingId)
   } catch (err) {
      await client.query('ROLLBACK')
      //console.log('ERROR API CREATE BOOKING', err.message)
      throw err
      res.status(500)
   } finally {
      //console.log('============ FINALLY ================')
      client.release()
   }
}
