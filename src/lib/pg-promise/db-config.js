// Database connection details;

export const dbConfig = {
   user: 'postgres',
   password: process.env.PGSQL_PASSWORD,
   host: process.env.PGSQL_HOST,
   port: process.env.PGSQL_PORT,
   database: process.env.PGSQL_DATABASE,

   // to auto-exit on idle, without having to shut-down the pool;
   // see https://github.com/vitaly-t/pg-promise#library-de-initialization
   allowExitOnIdle: true,
}

/**
 * En json
 * {
   "user": "postgres",
   "password": "${PGSQL_PASSWORD}",
   "host": "${PGSQL_HOST}",
   "port": "${PGSQL_PORT}",
   "database": "${PGSQL_DATABASE}",
   "allowExitOnIdle": true
}
 */
