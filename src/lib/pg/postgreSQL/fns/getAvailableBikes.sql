CREATE
OR REPLACE FUNCTION get_available_bikes(
        param_date_range tstzrange,
        param_size type_size,
        param_type type_model,
        param_range type_range
) RETURNS TABLE (
        stock INT,
        "bikeSize" type_size,
        "modelId" INTEGER,
        "modelName" text,
        "modelType" type_model,
        "modelRange" type_range,
        "modelBrand" text,
        "modelDesc" text,
        "modelImages" text [ ]
) AS $$
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
        ),
        SelectedBikeModels AS (
                SELECT model_id,
                        model_name,
                        model_type,
                        model_range,
                        model_brand,
                        model_description,
                        model_images
                FROM model
                WHERE model_range = param_range
                        AND model_type = param_type
        )
SELECT COUNT(bike_sn)::INT stock,
        bike_size,
        model_id,
        model_name,
        model_type,
        model_range,
        model_brand,
        model_description,
        model_images
FROM AvaiableBikes
        INNER JOIN SelectedBikeModels USING (model_id)
GROUP BY bike_size,
        model_id,
        model_name,
        model_type,
        model_range,
        model_brand,
        model_description,
        model_images;
END;
$$ LANGUAGE plpgsql;