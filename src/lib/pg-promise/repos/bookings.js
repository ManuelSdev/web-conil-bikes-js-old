const columnSet = {} // Reusable ColumnSet objects.

import { bookings } from '../sql'
/**
 * @class BookingsRepository
 * @description Bookings repository.
 * @param {Object} db - Database instance
 * Automated database connection context/interface.
 * @param {Object} pgp - pg-promise instance - pg-promise interface.
 * Library's root, if ever needed, like to access 'helpers'
 * or other namespaces available from the root.
 * @returns {Object} BookingsRepository
 * @example
 * const bookingsRepository = new BookingsRepository(db, pgp)
 * bookingsRepository.create()
 * bookingsRepository.init()
 */

export default class BookingsRepository {
   // @ts-ignore
   #bookingQueryFiles = mapFnToQueryFile(bookings)
   constructor(db, pgp) {
      this.db = db
      this.pgp = pgp

      // set-up all ColumnSet objects, if needed:
      // createColumnsets(pgp);
   }

   // Returns all booking records;
   /**
    *
    * @param {string} dateRange
    * - format '[2023-10-04T22:00:00.000Z,2023-10-31T22:59:59.999Z]'
    *
    */
   async findBookingDatesOnRange(dateRange) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesOnRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',this.#bookingQueryFiles)
      return this.db.one(this.#bookingQueryFiles.findBookingDatesOnRange, {
         dateRange,
      })
   }

   async findBookingOnDate(date) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesOnRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',this.#bookingQueryFiles)
      return this.db.any(this.#bookingQueryFiles.findBookingOnDate, {
         date,
      })
   }
   async findBookingById(id) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesOnRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',this.#bookingQueryFiles)
      return this.db.one(this.#bookingQueryFiles.findBookingById, {
         id,
      })
   }
}

/**
 *
 * @param {*} obj
 * @param {*} func -
 * @returns {Object} - objeto que contiene las mismas keys que el objeto de entrada,
 *  pero los valores de cada key son el resultado de aplicar la función func al valor de cada key
 */
function mapObject(obj, func) {
   return Object.fromEntries(
      Object.entries(obj).map(([k, v], i) => [k, func(v, k, i)])
   )
}

/**
 *
 * @param {*} obj - objeto cuyas keys son los nombres de las querys y los valores son las funciones sql que generan los QueryFile
 * @returns {Object} - objeto cuyas keys son los nombres de las querys y los valores son los QueryFile
 */
function mapFnToQueryFile(obj) {
   return Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, v()]))
}

//////////////////////////////////////////////////////////
// Example of statically initializing ColumnSet objects:
//TODO: revisar
function createColumnsets(pgp) {
   // create all ColumnSet objects only once:
   if (!columnSet.insert) {
      // Type TableName is useful when schema isn't default "public" ,
      // otherwise you can just pass in a string for the table name.
      const table = new pgp.helpers.TableName({
         table: 'users',
         schema: 'public',
      })

      columnSet.insert = new pgp.helpers.ColumnSet(['name'], { table })
      columnSet.update = columnSet.insert.extend(['?id'])
   }
   return columnSet
}

/**
//////////////////////////////// CLAVE GORDA ////////////////////////////////////////
Si gigo el ejemplo de la demo de pg promise, debería tener esto en /sql/index.js:
   export const bookings = {
   findBookingDatesOnRange: sql(
      '/src/lib/pg-promise/sql/bookings/findBookingDatesOnRange.sql'
   ),
   }
Este mismo archivo con la clase BookingsRepository está importando bookings de /sql/index.js
Entonces, cada vez que llamas a un método de BookingsRepository, se está ejecutando el código de /sql/index.js
y se está creando un nuevo objeto bookings con el método findBookingDatesOnRange.
Esto genera el problema de pg promise sobre crear más de una vez un objeto QueryFile para el mismo archivo.
La solución es crear un campo privado en BookingsRepository que sea un objeto con todos los QueryFile. Si lo pones
como campo de clase (si #) o en el constructor, en principio no debería haber problema.

Una vez puesto el campo privado, hay que cambiar el método findBookingDatesOnRange para que no ejecute la función
sql, sino que devuelva la propia funcion sql. Esto es porque el método findBookingDatesOnRange se ejecuta cada vez
que se llama a un método de BookingsRepository, y si ejecuta la función sql, se crea un nuevo objeto QueryFile cada vez.

Entonces, cambio la función que puse al principio del comentario por esto:
   const bookings = {
   findBookingDatesOnRange: () =>
      sql('/src/lib/pg-promise/sql/bookings/findBookingDatesOnRange.sql'),
   }  
y en el constructor de BookingsRepository hago esto:
   this.#bookingQueryFiles = mapObject(bookings)
mapObject va a recorrer el objeto bookings y va a devolver otro objeto con las mismas keys pero los valores, ahora, no son
la funciones, sino la ejecuión de las mismas. Así, this.#bookingQueryFiles va a almacenar en cada key el objeto QueryFile
y a éllos se accede con this.#bookingQueryFiles.findBookingDatesOnRange, evitando así crear un nuevo objeto QueryFile cada vez
que se llama a un método de BookingsRepository. OLE!
*/

/*
   // Creates the table;
   async create() {
      return this.db.none(bookings.create)
   }

   // Initializes the table with some user records, and return their id-s;
   async init() {
      return this.db.map(bookings.init, [], (row) => row.id)
   }

   // Drops the table;
   async drop() {
      return this.db.none(bookings.drop)
   }

   // Removes all records from the table;
   async empty() {
      return this.db.none(bookings.empty)
   }

   // Adds a new booking, and returns the new object;
   async add(values) {
      return this.db.one(bookings.add, values)
   }

   // Tries to delete a booking by id, and returns the number of records deleted;
   async remove(id) {
      return this.db.result(
         'DELETE FROM bookings WHERE id = $1',
         +id,
         (r) => r.rowCount
      )
   }

   // Tries to find a booking from id;
   async findById(id) {
      return this.db.oneOrNone('SELECT * FROM bookings WHERE id = $1', +id)
   }

   // Tries to find a booking from user id;
   async findByUserId(id) {
      return this.db.oneOrNone('SELECT * FROM bookings WHERE user_id = $1', +id)
   }

   // Returns all booking records;
   async all() {
      return this.db.any('SELECT * FROM bookings')
   }

   // Returns the total number of bookings;
   async total() {
      return this.db.one('SELECT count(*) FROM bookings', [], (a) => +a.count)
   }
*/
