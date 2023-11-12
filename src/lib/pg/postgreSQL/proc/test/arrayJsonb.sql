CREATE
OR REPLACE PROCEDURE test2(uno text, OUT v_out jsonb) LANGUAGE plpgsql AS $$
BEGIN v_out := uno;
END;
$$;