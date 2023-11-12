create function find_film_by_id(id int) returns film language sql as $$
select *
from film
where film_id = id;
$$;