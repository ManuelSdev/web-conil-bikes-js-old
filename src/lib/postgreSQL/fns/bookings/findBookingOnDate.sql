CREATE OR REPLACE FUNCTION find_booking_on_date(p_date timestamp WITH TIME ZONE) RETURNS TABLE (
        "bookingId" integer,
        state type_booking_state,
        delivery boolean,
        pickup boolean,
        bikes smallint
    ) AS $$ BEGIN RETURN query WITH asBooking AS (
        SELECT booking_id,
            booking_state,
            booking_delivery,
            booking_pickup
        FROM BOOKING
        WHERE p_date::timestamp WITH TIME ZONE = LOWER(booking_date_range)
            OR p_date::timestamp WITH TIME ZONE = UPPER(booking_date_range)
    ),
    asOrder AS (
        SELECT booking_id,
            COUNT(booking_id)::smallint BIKES
        FROM booking_order
        GROUP BY booking_id
    )
SELECT booking_id AS bookingId,
    booking_state AS state,
    booking_delivery AS delivery,
    booking_pickup AS pickup,
    asOrder.bikes AS bikes
FROM asBooking
    INNER JOIN asOrder USING (booking_id);
END;
$$ LANGUAGE plpgsql;