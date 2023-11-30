CREATE OR REPLACE FUNCTION find_booking_bikes_by_id(p_booking_id integer) RETURNS TABLE (
        "modelId" integer,
        "bikeSn" text,
        pedal text,
        basket boolean,
        "bikeSize" type_size,
        "modelName" text,
        "modelType" type_model,
        "modelRange" type_range,
        "modelBrand" text,
        "modelImages" text []
    ) AS $$ BEGIN RETURN query WITH asOrder AS (
        SELECT bike_sn,
            booking_order.pedal_model_name AS pedal,
            booking_order.basket
        FROM booking_order
        WHERE booking_id = p_booking_id
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
    asOrder.pedal,
    asOrder.basket,
    bike_size AS "bikeSize",
    model_name AS "modelName",
    model_type AS "modelType",
    model_range AS "modelRange",
    model_brand AS "modelBrand",
    model_images AS "modelImages"
FROM asOrder
    NATURAL JOIN asBikes
    NATURAL JOIN asModel;
END;
$$ LANGUAGE plpgsql;