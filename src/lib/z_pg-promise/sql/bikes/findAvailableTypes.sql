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
                                AND $ [ dateRange ]::tstzrange && booking_date_range
                        )
                )
        )
        AND bike_size = $ [ SIZE ]
    ORDER BY bike_size ASC
)
SELECT DISTINCT model_type
FROM AvailableBikes
    INNER JOIN model USING (model_id);