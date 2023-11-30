CREATE OR REPLACE FUNCTION find_booking_by_id(p_booking_id integer) RETURNS TABLE (
        "email" text,
        "price" smallint,
        "dateRange" tstzrange,
        "duration" smallint,
        "delivery" boolean,
        "pickup" boolean,
        "address" text,
        "state" type_booking_state,
        "bookingId" integer,
        "name" text,
        "phone" text
    ) AS $$ BEGIN RETURN query WITH bookingData AS (
        SELECT *
        FROM BOOKING
        WHERE booking_id = p_booking_id
    ),
    userData AS (
        SELECT *
        FROM app_user
        WHERE user_email IN (
                SELECT user_email
                FROM bookingData
            )
    )
SELECT user_email AS "email",
    booking_price AS "price",
    booking_date_range AS "dateRange",
    booking_duration AS "duration",
    booking_delivery AS "delivery",
    booking_pickup AS "pickup",
    booking_address AS "address",
    booking_state AS "state",
    booking_id AS "bookingId",
    user_name AS "name",
    user_phone AS "phone"
FROM bookingData
    NATURAL JOIN userdata;
END;
$$ LANGUAGE plpgsql;