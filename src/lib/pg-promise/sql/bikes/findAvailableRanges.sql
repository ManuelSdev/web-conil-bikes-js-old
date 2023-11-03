WITH AvaiableBikes AS (
        SELECT DISTINCT bike_sn,
                bike_size,
                model_id
        FROM Bike
        WHERE bike_sn IN (
                        SELECT bike_sn avaiableBikeSn
                        FROM bike
                        WHERE bike_sn NOT IN (
                                        SELECT bike_sn reservedBikeSn
                                        FROM booking_order
                                        WHERE booking_id IN (
                                                        SELECT booking_id reservedId
                                                        FROM Booking
                                                        WHERE booking_state != 'cancelled'
                                                                AND $[dateRange]::tstzrange && booking_date_range
                                                )
                                )
                )
                AND bike_size = $[size]
        ORDER BY bike_size ASC
)
SELECT DISTINCT model_range
FROM AvaiableBikes
        INNER JOIN model USING (model_id)
WHERE model_type = $[type];