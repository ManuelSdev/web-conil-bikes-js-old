WITH asBooking AS (
    SELECT booking_id,
        booking_state,
        booking_delivery,
        booking_pickup
    FROM BOOKING
    WHERE $[date]::timestamp WITH TIME ZONE = LOWER(booking_date_range)
        OR $[date]::timestamp WITH TIME ZONE = UPPER(booking_date_range)
),
asOrder AS (
    SELECT booking_id,
        COUNT(booking_id)::int BIKES
    FROM booking_order
    GROUP BY booking_id
)
SELECT booking_id AS id,
    booking_state AS state,
    booking_delivery AS delivery,
    booking_pickup AS pickup,
    bikes
FROM asBooking
    INNER JOIN asOrder USING (booking_id);