Crear un procedimiento plpgsql que recibe los siguientes parametros entrada
p*bikes json[],p_user_id integer, p_is_admin boolean, p_date_range text, p_address* text, p_price smallint,p_email text, p_delivery boolean, p_pickup boolean, p_duration smallint y el parametro de salida v_booking_id integer.

La funcion hace los siguientes pasos:

1. Si is_admin es true, usa esté código

WITH Admin_id AS (
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
SELECT booking_id INTO v_booking_id FROM new_booking;

si is_admin no es true, usa este otro código

WITH NewBooking AS (
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
SELECT booking_id INTO v_booking_id FROM new_booking;

2. Recorre el array p_bikes. En cada iteracion, extrae las propiedades modelId, bikeSize y quantity del elemento. Si la propiedad quantity es igual a 1, ejecuta este código:

INSERT INTO booking_order
VALUES (
(
SELECT bike_sn
FROM Bike
WHERE model_id IN modelId
AND bike_size IN bikeSize
ORDER BY bike_Sn ASC
LIMIT 1
), (
SELECT booking_id
FROM NewBooking
)
)
Si la propiedad quantity no es igual a 1, ejecuta while v_counter < quantity loop, donde v_counter=0. En cada iteracion while, ejecuta esté código

INSERT INTO booking_order
VALUES (
(
SELECT bike_sn
FROM Bike
WHERE model_id IN modelId
AND bike_size IN bikeSize
ORDER BY bike_Sn ASC
LIMIT 1 offset v_counter
), (
SELECT booking_id
FROM NewBooking
)
)
