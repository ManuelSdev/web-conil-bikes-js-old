import { QueryFile } from 'pg-promise'
import { join } from 'path'

///////////////////////////////////////////////////////////////////////////////////////////////
// Criteria for deciding whether to place a particular query into an external SQL file or to
// keep it in-line (hard-coded):
//
// - Size / complexity of the query, because having it in a separate file will let you develop
//   the query and see the immediate updates without having to restart your application.
//
// - The necessity to document your query, and possibly keeping its multiple versions commented
//   out in the query file.
//
// In fact, the only reason one might want to keep a query in-line within the code is to be able
// to easily see the relation between the query logic and its formatting parameters. However, this
// is very easy to overcome by using only Named Parameters for your query formatting.
////////////////////////////////////////////////////////////////////////////////////////////////
/*
export const users = {
   create: sql('users/create.sql'),
   empty: sql('users/empty.sql'),
   init: sql('users/init.sql'),
   drop: sql('users/drop.sql'),
   add: sql('users/add.sql'),
}
*/
export const bookings = {
   //b://console.log(      'COÑOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'   ),
   findBookingDatesInRange: () =>
      sql('/src/lib/pg-promise/sql/bookings/findBookingDatesInRange.sql'),
   findBookingOnDate: () =>
      sql('/src/lib/pg-promise/sql/bookings/findBookingOnDate.sql'),
   findBookingById: () =>
      sql('/src/lib/pg-promise/sql/bookings/findBookingById.sql'),
   findBookingBikesById: () =>
      sql('/src/lib/pg-promise/sql/bookings/findBookingBikesById.sql'),
}
export const bikes = {
   //b://console.log(      'COÑOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'   ),
   findAvailableSizesInRange: () =>
      sql('/src/lib/pg-promise/sql/bikes/findAvailableSizesInRange.sql'),
   findAvailableTypes: () =>
      sql('/src/lib/pg-promise/sql/bikes/findAvailableTypes.sql'),
   findAvailableRanges: () =>
      sql('/src/lib/pg-promise/sql/bikes/findAvailableRanges.sql'),

   findAvailableBikes: () =>
      sql('/src/lib/pg-promise/sql/bikes/findAvailableBikes.sql'),
   /*
   findAppBikesConfig: () =>
      sql('/src/lib/pg-promise/sql/bikes/findAppBikesConfig.sql'),
      */
}
///////////////////////////////////////////////
// Helper for linking to external query files;
function sql(file) {
   // const fullPath = join(__dirname, file); // generating full path;
   //TODO: process.cwd() es el directorio donde se ejecuta el comando
   //llega hasta src, por eso file tiene que empezar por /src
   const dirName = process.cwd()
   const fullPath = join(dirName, file)
   const options = {
      // minifying the SQL is always advised;
      // see also option 'compress' in the API;
      minify: true,
      // See also property 'params' for two-step template formatting
   }

   const queryFile = new QueryFile(fullPath, options)
   //console.log(     '********************* CREADO queryFile ***********************',     queryFile   )

   if (queryFile.error) {
      // Something is wrong with our query file :(
      // Testing all files through queries can be cumbersome,
      // so we also report it here, while loading the module:
      console.error('QueryFile error -> ', queryFile.error)
   }
   return queryFile

   // See QueryFile API:
   // http://vitaly-t.github.io/pg-promise/QueryFile.html
}
