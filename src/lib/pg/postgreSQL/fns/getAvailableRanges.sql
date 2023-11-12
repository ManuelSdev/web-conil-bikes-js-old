CREATE
OR REPLACE FUNCTION get_available_ranges(
        param_date_range tstzrange,
        param_size type_size,
        param_type type_model
) RETURNS TABLE (model_range type_range) AS $$
BEGIN RETURN query WITH AvaiableBikes AS (
                SELECT DISTINCT bike.bike_sn,
                        bike.bike_size,
                        bike.model_id
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
                                                                        AND param_date_range && booking_date_range
                                                        )
                                        )
                        )
                        AND bike_size = param_size
                ORDER BY bike_size ASC
        )
SELECT DISTINCT model.model_range
FROM AvaiableBikes
        INNER JOIN model USING (model_id)
WHERE model.model_type = param_type;
END;
$$ LANGUAGE plpgsql;