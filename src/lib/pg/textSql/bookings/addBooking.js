export const addBookingText = (data) => {
   const text = `
   ${insertBookingText(data)} ,
   bookingOrder AS (
      INSERT INTO booking_order
         VALUES
         ${getBikeSnText(data.bikes)}
   )
   SELECT booking_id as "bookingId" FROM newBooking
   `
   return text
}

function insertBookingText(data) {
   const {
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
   } = data

   const text = isAdmin
      ? `
    WITH W_id AS (
       SELECT user_id FROM App_user WHERE user_email='${email}'
       ),
    newBooking AS (
       INSERT INTO booking (user_id,created_by, booking_price, booking_date_range, booking_duration, booking_delivery, booking_pickup, booking_address)
          VALUES ((SELECT user_id FROM W_id),${userId}, ${price}, '${dateRange}', ${duration}, ${delivery}, ${pickup}, '${address}')
       RETURNING
          booking_id
    )
    `
      : `
    WITH newBooking AS (
       INSERT INTO booking (user_id,created_by, booking_price, booking_date_range, booking_duration, booking_delivery, booking_pickup, booking_address)
       VALUES (${userId},${userId}, ${price}, '${dateRange}', ${duration}, ${delivery}, ${pickup}, '${address}')
       RETURNING
    booking_id
    )
 `
   return text
}
//bookingId sirve para modificar una reserva existente
function getBikeSnText(bikes, bookingId = null) {
   let text = ''
   bikes.forEach((bike, index) => {
      const { modelId, bikeSize, quantity } = bike
      if (quantity === 1) {
         text =
            text +
            `
                 ((
                   SELECT
                   bike_sn
                 FROM
                   Bike
                 WHERE
                   model_id IN ('${modelId}')
                   AND bike_size IN ('${bikeSize}')
                   order by bike_Sn asc
                   LIMIT 1),
                 ${
                    bookingId
                       ? bookingId + `)`
                       : `(SELECT
                     booking_id
                     FROM
                       newBooking)
                       )`
                 } ${index === bikes.length - 1 ? '' : ','}
                 `
      } else {
         let n = 0
         while (n < quantity) {
            text =
               text +
               `(
                       (SELECT
                         bike_sn
                       FROM
                         Bike
                       WHERE
                         model_id IN ('${modelId}')
                         AND bike_size IN ('${bikeSize}')
                         order by bike_Sn asc
                         LIMIT 1 offset ${n}),
                         ${
                            bookingId
                               ? bookingId + `)`
                               : `(SELECT
                            booking_id
                            FROM
                              newBooking)
                              )`
                         } ${
                            index === bikes.length - 1 && n === quantity - 1
                               ? ''
                               : ','
                         }
                 `
            n++
         }
      }
   })
   return text
}
