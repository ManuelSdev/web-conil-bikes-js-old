SELECT *
FROM booking;
UPDATE booking
SET booking_date_range = '["2023-10-04 22:00:00+00","2023-10-24 22:00:00+00"]'
WHERE booking_id = 39;