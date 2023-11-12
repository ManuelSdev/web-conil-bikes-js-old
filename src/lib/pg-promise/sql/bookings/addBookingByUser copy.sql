WITH newBooking AS (
    INSERT INTO booking (
            user_id,
            created_by,
            booking_price,
            booking_date_range,
            booking_duration,
            booking_delivery,
            booking_pickup,
            booking_address
        )
    VALUES (
            1,
            1,
            54,
            '[2023-11-09T23:00:00.000Z,2023-11-11T23:00:00.000Z]',
            2,
            false,
            false,
            'calle hola'
        )
    RETURNING booking_id
),
bookingOrder AS (
    INSERT INTO booking_order
    VALUES (
            (
                SELECT bike_sn
                FROM Bike
                WHERE model_id IN ('4')
                    AND bike_size IN ('l')
                order by bike_Sn asc
                LIMIT 1
            ), (
                SELECT booking_id
                FROM newBooking
            )
        ),
        (
            (
                SELECT bike_sn
                FROM Bike
                WHERE model_id IN ('1')
                    AND bike_size IN ('l')
                order by bike_Sn asc
                LIMIT 1
            ), (
                SELECT booking_id
                FROM newBooking
            )
        )
)
SELECT booking_id
FROM newBooking