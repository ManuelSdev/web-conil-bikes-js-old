SELECT DISTINCT bike_size
FROM bike
WHERE bike_sn IN (
        SELECT bike_sn
        FROM bike
        WHERE bike_sn NOT IN (
                SELECT bike_sn
                FROM booking_order
                WHERE booking_id IN (
                        SELECT booking_id
                        FROM booking
                        WHERE booking_state != 'cancelled'
                            AND '[2023-10-10T22:00:00.000Z,2023-10-18T22:00:00.000Z]'::tstzrange && booking_date_range
                    )
            )
    )
ORDER BY bike_size ASC;