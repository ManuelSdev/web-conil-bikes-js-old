import { query } from '../db'

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
