CREATE OR REPLACE FUNCTION get_available_types(param_date_range tstzrange, param_size type_size) RETURNS TABLE (model_type type_model) AS $$ BEGIN RETURN query WITH AvailableBikes AS (
                SELECT DISTINCT bike.bike_size,
                        bike.model_id
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
                                                                        AND param_date_range && booking_date_range
                                                        )
                                        )
                        )
                        AND bike_size = param_size
                ORDER BY bike_size ASC
        )
SELECT DISTINCT model.model_type
FROM AvailableBikes
        INNER JOIN model USING (model_id);
END;
$$ LANGUAGE plpgsql;