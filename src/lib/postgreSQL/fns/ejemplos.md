# Devuelve tabla con un campo y una fila que contiene un array con las sizes

CREATE OR REPLACE FUNCTION test()
RETURNS type_size[] AS $$
DECLARE
result type_size[];
BEGIN
SELECT array_agg(bike_size.bike_size)
INTO result
FROM bike_size;
RETURN result;
END;

$$
LANGUAGE plpgsql;
$$
