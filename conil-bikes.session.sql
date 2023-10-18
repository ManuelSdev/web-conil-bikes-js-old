SELECT *
FROM booking;
UPDATE booking
SET booking_date_range = '["2023-10-17 22:00:00+00","2023-10-18 22:00:00+00"]'
WHERE booking_id = 43;