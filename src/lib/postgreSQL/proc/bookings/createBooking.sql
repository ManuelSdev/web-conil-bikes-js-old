CREATE
OR REPLACE PROCEDURE add_booking(
    p_bikes text,
    p_user_id INTEGER,
    p_is_admin BOOLEAN,
    p_date_range tstzrange,
    p_address TEXT,
    p_price SMALLINT,
    p_email TEXT,
    p_delivery BOOLEAN,
    p_pickup BOOLEAN,
    p_duration SMALLINT,
    OUT v_created_booking_id INTEGER
) LANGUAGE plpgsql AS $$
DECLARE v_counter INTEGER;
v_bike JSON;
p_bikes_array jsonb;
BEGIN p_bikes_array := p_bikes::jsonb;
IF p_is_admin THEN WITH Admin_id AS (
    SELECT user_id
    FROM App_user
    WHERE user_email = p_email
),
NewBooking AS (
    INSERT INTO booking (
            user_id,
            created_by,
            booking_price,
            booking_date_range,
            booking_duration,
            booking_delivery,
            booking_pickup,
            booking_address
        )
    VALUES (
            (
                SELECT user_id
                FROM Admin_id
            ),
            p_user_id,
            p_price,
            p_date_range,
            p_duration,
            p_delivery,
            p_pickup,
            p_address
        ) RETURNING booking_id
)
SELECT booking_id INTO v_created_booking_id
FROM NewBooking;
ELSE WITH NewBooking AS (
    INSERT INTO booking (
            user_id,
            created_by,
            booking_price,
            booking_date_range,
            booking_duration,
            booking_delivery,
            booking_pickup,
            booking_address
        )
    VALUES (
            p_user_id,
            p_user_id,
            p_price,
            p_date_range,
            p_duration,
            p_delivery,
            p_pickup,
            p_address
        ) RETURNING booking_id
)
SELECT booking_id INTO v_created_booking_id
FROM NewBooking;
END IF;
FOR i IN 1 ..jsonb_array_length(p_bikes_array)
LOOP v_bike := p_bikes_array [ i ];
IF (v_bike->>'quantity')::INTEGER = 1 THEN
INSERT INTO booking_order
VALUES (
        (
            SELECT bike_sn
            FROM Bike
            WHERE model_id IN ((v_bike->>'modelId')::INTEGER)
                AND bike_size IN ((v_bike->>'bikeSize')::type_size)
            ORDER BY bike_Sn ASC
            LIMIT 1
        ), v_created_booking_id
    );
ELSE v_counter := 0;
WHILE v_counter < (v_bike->>'quantity')::INTEGER
LOOP
INSERT INTO booking_order
VALUES (
        (
            SELECT bike_sn
            FROM Bike
            WHERE model_id IN ((v_bike->>'modelId')::INTEGER)
                AND bike_size IN ((v_bike->>'bikeSize')::type_size)
            ORDER BY bike_Sn ASC
            LIMIT 1 OFFSET v_counter
        ), v_created_booking_id
    );
v_counter := v_counter + 1;
END
LOOP;
END IF;
END
LOOP;
END;
$$;