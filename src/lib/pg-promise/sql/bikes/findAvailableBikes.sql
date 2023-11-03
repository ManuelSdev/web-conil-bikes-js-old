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
    WHERE model_range = $[range]
        AND model_type = $[type]
)
SELECT count(bike_sn)::int count,
    bike_size AS "bikeSize",
    model_id AS "modelId",
    model_name AS "modelName",
    model_type AS "modelType",
    model_range AS "modelRange",
    model_brand AS "modelBrand",
    model_description AS "modelDesc",
    model_images AS "modelImages"
FROM AvaiableBikes
    INNER JOIN SelectedBikeModels USING (model_id)
GROUP BY "modelId",
    "bikeSize",
    "modelName",
    "modelType",
    "modelRange",
    "modelBrand",
    "modelDesc",
    "modelImages"