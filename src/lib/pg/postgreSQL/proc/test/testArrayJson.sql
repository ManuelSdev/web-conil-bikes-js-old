CREATE
OR REPLACE PROCEDURE ta(uno json, OUT v_out INTEGER) LANGUAGE plpgsql AS $$
BEGIN
SELECT 999999 INTO v_out;
END;
$$;
/*
 CALL ta('[{"hola": 9}]'::json,null); 
 */