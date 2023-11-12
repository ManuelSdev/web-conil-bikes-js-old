CREATE
OR REPLACE FUNCTION test3(uno text) returns INT LANGUAGE plpgsql AS $$
DECLARE v_out jsonb;
v_length INT;
BEGIN v_out := uno::jsonb;
v_length := jsonb_array_length(v_out);
RETURN v_length;
END;
$$;