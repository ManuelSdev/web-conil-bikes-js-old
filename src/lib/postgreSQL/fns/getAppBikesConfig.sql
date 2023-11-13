CREATE
OR REPLACE FUNCTION get_app_bikes_config_segments() RETURNS TABLE (
        "modelType" type_model "modelRange" type_range "segmentPrice" SMALLINT
) AS $$
BEGIN RETURN query
SELECT DISTINCT bike.bike_size
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
                                                        AND p_date_range && booking_date_range
                                        )
                        )
        )
ORDER BY bike_size ASC;
END;
$$ LANGUAGE plpgsql;