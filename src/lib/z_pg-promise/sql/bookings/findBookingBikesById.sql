WITH asOrder AS (
    SELECT bike_sn,
        pedal_model_name AS pedal,
        basket
    FROM booking_order
    WHERE booking_id = $[id]
),
asBikes AS (
    SELECT bike_sn,
        model_id,
        bike_size
    FROM BIKE
    WHERE bike_sn IN (
            SELECT bike_sn
            FROM asOrder
        )
),
asModel AS (
    SELECT model_id,
        model_name,
        model_type,
        model_range,
        model_brand,
        model_images
    FROM model
    WHERE model_id IN (
            SELECT model_id
            FROM asBikes
        )
)
SELECT model_id AS "modelId",
    bike_sn AS "bikeSn",
    pedal,
    basket,
    bike_size AS "bikeSize",
    model_name AS "modelName",
    model_type AS "modelType",
    model_range AS "modelRange",
    model_brand AS "modelBrand",
    model_images AS "modelImages"
FROM asOrder
    NATURAL JOIN asBikes
    NATURAL JOIN asModel;