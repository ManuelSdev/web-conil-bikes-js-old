WITH AvailableBikes AS (
    SELECT DISTINCT bike_size,
        model_id
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
                                AND '[2023-11-10T23:00:00.000Z,2023-11-21T23:00:00.000Z]'::tstzrange && booking_date_range
                        )
                )
        )
        AND bike_size = 'xxl'
    ORDER BY bike_size ASC
)
SELECT DISTINCT model_type
FROM AvailableBikes
    INNER JOIN model USING (model_id)