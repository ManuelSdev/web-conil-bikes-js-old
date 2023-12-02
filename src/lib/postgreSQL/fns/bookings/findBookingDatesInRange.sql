CREATE OR REPLACE FUNCTION find_booking_dates_in_range(p_date_range tstzrange) RETURNS TABLE (
        "startDates" timestamp WITH time zone [],
        "endDates" timestamp WITH time zone [],
        "startEndDates" timestamp WITH time zone []
    ) AS $$ BEGIN RETURN query WITH dates AS (
        SELECT LOWER(booking_date_range) startDate,
            UPPER(booking_date_range) endDate
        FROM BOOKING
        WHERE p_date_range::tstzrange && booking_date_range
    ),
    startDates AS (
        SELECT startDate
        FROM dates
        WHERE p_date_range::tstzrange @> startDate
    ),
    endDates AS (
        SELECT endDate
        FROM dates
        WHERE p_date_range::tstzrange @> endDate
    ),
    startEndDates AS (
        SELECT startDate startEndDate
        FROM (
                SELECT *
                FROM startDates
                    CROSS JOIN endDates
            ) AS CROSSING
        WHERE startDate = endDate
    ),
    cleanStart AS (
        SELECT startDate
        FROM startDates
        WHERE startDate NOT IN (
                SELECT startEndDate
                FROM startEndDates
            )
    ),
    cleanEnd AS (
        SELECT endDate
        FROM endDates
        WHERE endDate NOT IN (
                SELECT startEndDate
                FROM startEndDates
            )
    ),
    cleanStartArray AS (
        SELECT ARRAY_AGG(startDate) startDates
        FROM cleanStart
    ),
    cleanEndArray AS (
        SELECT ARRAY_AGG(endDate) endDates
        FROM cleanEnd
    ),
    startEndArray AS (
        SELECT ARRAY_AGG(startEndDate) startEndDates
        FROM startEndDates
    )
SELECT *
FROM cleanStartArray,
    cleanEndArray,
    startEndArray;
END;
$$ LANGUAGE plpgsql;