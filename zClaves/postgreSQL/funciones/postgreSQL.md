Si quieres retornar una fila en PL/pgSQL, tienes varias opciones dependiendo de cómo quieras definir y usar la fila. Algunas de las opciones más comunes son:

-  **Retornar un tipo de dato compuesto**: Un tipo de dato compuesto es un conjunto de atributos con nombre y tipo que se pueden usar como una fila. Puedes crear un tipo de dato compuesto con la sentencia `CREATE TYPE` y luego usarlo como el tipo de retorno de tu función. Por ejemplo:

```sql
CREATE TYPE persona AS (nombre text, edad int, sexo char);

CREATE FUNCTION get_persona(id int) RETURNS persona AS $$
DECLARE
  p persona;
BEGIN
  SELECT nombre, edad, sexo INTO p FROM personas WHERE id = id;
  RETURN p;
END;
$$ LANGUAGE plpgsql;
```

-  **Retornar una tabla**: Una tabla es un conjunto de filas con una estructura definida. Puedes usar la palabra clave `RETURNS TABLE` para especificar las columnas y los tipos de la tabla que va a retornar tu función. Por ejemplo:

```sql
CREATE FUNCTION get_personas() RETURNS TABLE (nombre text, edad int, sexo char) AS $$
BEGIN
  RETURN QUERY SELECT nombre, edad, sexo FROM personas;
END;
$$ LANGUAGE plpgsql;
```

-  **Retornar un record**: Un record es un tipo de dato genérico que puede almacenar cualquier fila con cualquier número de columnas. Puedes usar la palabra clave `RETURNS record` para indicar que tu función va a retornar una fila sin especificar su estructura. Sin embargo, al llamar a la función, tendrás que proporcionar una lista de columnas y tipos para que PostgreSQL pueda interpretar el record. Por ejemplo:

```sql
CREATE FUNCTION get_persona(id int) RETURNS record AS $$
BEGIN
  RETURN (SELECT nombre, edad, sexo FROM personas WHERE id = id);
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_persona(1) AS (nombre text, edad int, sexo char);
```

Puedes encontrar más información y ejemplos sobre cómo retornar una fila en PL/pgSQL en los siguientes enlaces: [Capítulo 43. PL/pgSQL — SQL Procedural Language](^3^), [Devuelve varios campos como un registro en PostgreSQL con PL / pgSQL](^4^), [Creación de función en postgresql con retorno dinámico](^2^), [postgresql - recorrer un retorno de tipo tabla en plpgsql](^1^). Espero que te haya sido útil. 😊

Origen: Conversación con Bing, 10/11/2023
(1) PL/pgSQL y otros lenguajes procedurales en PostgreSQL. https://www.postgresql.org/message-id/attachment/92321/pl_pgsql_y_otros_lenguajes_procedurales_en_postgresql.pdf.
(2) Devuelve varios campos como un registro en PostgreSQL con PL / pgSQL. https://foroayuda.es/devuelve-varios-campos-como-un-registro-en-postgresql-con-pl-pgsql/.
(3) Creación de función en postgresql con retorno dinámico. https://es.stackoverflow.com/questions/200690/creaci%c3%b3n-de-funci%c3%b3n-en-postgresql-con-retorno-din%c3%a1mico.
(4) postgresql - recorrer un retorno de tipo tabla en plpgsql - Stack .... https://es.stackoverflow.com/questions/264743/recorrer-un-retorno-de-tipo-tabla-en-plpgsql.
(5) undefined. https://stackoverflow.com/questions/22423958/sql-function-return-type-table-vs-setof-records.

##############################

La diferencia entre usar `RETURNS record` y `RETURNS SETOF record` es que el primero indica que la función va a retornar una sola fila, mientras que el segundo indica que la función va a retornar un conjunto de filas. Por ejemplo, si tienes una función que retorna el nombre y la edad de una persona a partir de su id, puedes usar `RETURNS record` para devolver una sola fila con esos datos. Pero si tienes una función que retorna el nombre y la edad de todas las personas que cumplen una condición, puedes usar `RETURNS SETOF record` para devolver varias filas con esos datos. En ambos casos, tendrás que especificar la estructura de la fila al llamar a la función, usando la sintaxis `AS (columna1 tipo1, columna2 tipo2, ...)`. Puedes encontrar más información y ejemplos sobre el uso de `RETURNS record` y `RETURNS SETOF record` en los siguientes enlaces: [SQL function return-type: TABLE vs SETOF records](^2^), [Return multiple fields as a record in PostgreSQL with PL/pgSQL](^3^), [38.5. Query Language ( SQL ) Functions - PostgreSQL](^4^). Espero que te haya sido útil. 😊

Origen: Conversación con Bing, 10/11/2023
(1) SQL function return-type: TABLE vs SETOF records. https://stackoverflow.com/questions/22423958/sql-function-return-type-table-vs-setof-records.
(2) Return multiple fields as a record in PostgreSQL with PL/pgSQL. https://stackoverflow.com/questions/4547672/return-multiple-fields-as-a-record-in-postgresql-with-pl-pgsql.
(3) 38.5. Query Language ( SQL ) Functions - PostgreSQL. https://www.postgresql.org/docs/current/xfunc-sql.html.
(4) SQL function return-type: TABLE vs SETOF records – SQL - Tutorialink. https://sql.tutorialink.com/sql-function-return-type-table-vs-setof-records/.

## VER EL CÓDIGO SQL RESULTANTE AL EJECUTAR UNA FUNCION

https://dba.stackexchange.com/questions/84414/explain-analyze-shows-no-details-for-queries-inside-a-plpgsql-function

https://dba.stackexchange.com/questions/206438/view-the-final-query-executed-by-postgresql-function

Entiendo. Para ver la consulta SQL que genera la función PL/pgSQL con los valores reales de los parámetros, puedes usar la extensión auto_explain, que permite registrar las sentencias ejecutadas por el servidor, incluyendo las que se generan dentro de las funciones. Para usar esta extensión, tienes que seguir estos pasos:

-  Cargar la extensión con el comando `CREATE EXTENSION auto_explain;`
-  Establecer el parámetro `auto_explain.log_min_duration` a un valor en milisegundos que indique el tiempo mínimo de ejecución de una sentencia para que se registre. Por ejemplo, `SET auto_explain.log_min_duration = 0;` para registrar todas las sentencias.
-  Establecer el parámetro `auto_explain.log_nested_statements` a true para que se registren también las sentencias anidadas dentro de las funciones. Por ejemplo, `SET auto_explain.log_nested_statements = true;`
-  Establecer el parámetro `auto_explain.log_analyze` a true para que se muestren los tiempos reales de ejecución de cada paso de la consulta. Por ejemplo, `SET auto_explain.log_analyze = true;`
-  Llamar a la función PL/pgSQL con los valores reales de los parámetros y revisar el archivo de registro del servidor para ver la consulta SQL generada y su plan de ejecución.

Puedes encontrar más información y ejemplos sobre cómo usar la extensión auto_explain en los siguientes enlaces: [auto_explain](^1^), [How to log and analyze PostgreSQL queries with auto_explain](^2^), [PostgreSQL: Documentation: 9.6: auto_explain](^3^). Espero que te haya sido útil. 😊.

Origen: Conversación con Bing, 11/11/2023
(1) sql - ¿Cómo obtener las tablas relacionadas a una función en postgreSQL .... https://es.stackoverflow.com/questions/83038/c%c3%b3mo-obtener-las-tablas-relacionadas-a-una-funci%c3%b3n-en-postgresql.
(2) Manejando funciones en PostgreSQL - TodoPostgreSQL. https://www.todopostgresql.com/manejando-funciones-en-postgresql/.
(3) como se crea una funcion en PL/PgSQL. https://es.stackoverflow.com/questions/414207/como-se-crea-una-funcion-en-pl-pgsql.
(4) PL/PgSQL - Wikipedia, la enciclopedia libre. https://es.wikipedia.org/wiki/PL/PgSQL.
(5) plpgsql - IES VIRGEN DEL ESPINO. http://v-espino.com/~chema/daw1/tutoriales/postgres/plpgsql.htm.
(6) Pl-pgsql - ejercicios - PL/pgSQL - SQL Procedural Language 28 ... - Studocu. https://www.studocu.com/es/document/universidad-de-alcala/fundamentos-de-la-empresa/pl-pgsql-ejercicios/43192149.
(7) Crear una consulta de parámetros (Power Query). https://support.microsoft.com/es-es/office/crear-una-consulta-de-par%C3%A1metros-power-query-5eb365bc-3982-4ab2-8830-b205a69e0f33.
(8) es.wikipedia.org. https://es.wikipedia.org/wiki/PL/PgSQL.
