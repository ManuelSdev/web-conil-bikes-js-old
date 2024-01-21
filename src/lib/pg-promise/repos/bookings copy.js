const columnSet = {} // Reusable ColumnSet objects.

import { query } from 'pg-monitor'
import { bookings } from '../sql'
import { QueryFile } from 'pg-promise'
//import BookingsBase from './BookingsBase'
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
//const bookingQueryFiles = mapFnToQueryFile(bookings)
export default class BookingsRepository {
   static {
     //console.log(
         '###############---------------------------------------------######################'
      )
   }
   // @ts-ignore
   //Los estaticos se llaman con  BookingsRepository.bookingQueryFiles
   //static mbookingQueryFiles = mapFnToQueryFile(bookings)
   // #bookingQueryFiless = mapFnToQueryFile(bookings, 'INIT')
   /*
   static #mapFnToQueryFile(obj = bookings, quien) {
      const bookingQueryFiles = Object.fromEntries(
         Object.entries(obj).map(([k, v], i) => [k, v()])
      )
     //console.log(
         quien,
         '    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -> '
         //,      bookingQueryFiles
      )
      return bookingQueryFiles
   }
*/

   //Los privados se llaman con this.#bookingQueryFiles

   static mapFnToQueryFile(obj) {
      const bookingQueryFiles = Object.fromEntries(
         Object.entries(obj).map(([k, v], i) => [k, v()])
      )
     //console.log(
         ' 2 ### ejecuta mapFnToQueryFile en clase BookingsRepository '
         //,      bookingQueryFiles
      )
      return bookingQueryFiles
   }
   // static #bookings = { ...bookings }

   static bookingQueryFiles =
     //console.log('2 ### ejecuta OBJECT ENTRIES BookingsRepository ') ||
      Object.fromEntries(Object.entries(bookings).map(([k, v], i) => [k, v()]))

   constructor(db, pgp) {
      // //console.log('Constructor &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
      //  super()
      this.db = db
      this.pgp = pgp
     //console.log('*** Instancia BookingsRepository creada')
      /*
      this.bookingQueryFiles =
        //console.log('2 ### ejecuta OBJECT ENTRIES BookingsRepository ') ||
         Object.fromEntries(
            Object.entries(bookings).map(([k, v], i) => [k, v()])
         )
         */
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
   async findBookingDatesInRange(dateRange) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesInRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',BookingsRepository.bookingQueryFiles)
      const dates = await this.db.one(
         BookingsRepository.bookingQueryFiles.findBookingDatesInRange,
         //  this.bookingQueryFiles.findBookingDatesInRange,

         {
            dateRange,
         }
      )
      //console.log('BookingsRepository.findBookingDatesInRange -> ', dates)
      dates.startdates ??= []
      dates.enddates ??= []
      dates.startenddates ??= []
      const {
         startdates: startDates,
         enddates: endDates,
         startenddates: startEndDates,
      } = dates
      const bookingDates = { startDates, endDates, startEndDates }
      return bookingDates
   }

   async findBookingOnDate(date) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesInRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',BookingsRepository.bookingQueryFiles)
      return this.db.any(
         BookingsRepository.bookingQueryFiles.findBookingOnDate,
         //  this.bookingQueryFiles.findBookingOnDate,
         {
            date,
         }
      )
   }

   async findBookingById(bookingId) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesInRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',BookingsRepository.bookingQueryFiles)
      ////console.log('findBookingById ---> this.db.one')
      return await this.db.one(
         BookingsRepository.bookingQueryFiles.findBookingById,
         //  this.bookingQueryFiles.findBookingById,
         {
            id: bookingId,
         }
      )
   }
   async findBookingBikesById(bookingId) {
      ////console.log('findBookingBikesById ---> this.db.many')
      return await this.db.many(
         BookingsRepository.bookingQueryFiles.findBookingBikesById,
         //this.bookingQueryFiles.findBookingBikesById,
         {
            id: bookingId,
         }
      )
   }
   async findBookingWithBikesById(bookingId) {
      //console.log('findBookingWithBikesById llamada por ----> ', quien)
      const task = async () => {
         // //console.log(' findBookingWithBikesById ---> this.db.task')
         const bookingData = await this.findBookingById(bookingId)
         const bikes = await this.findBookingBikesById(bookingId)
         const res = { bookingData, bikes }
         //const res = booking
         return res
      }
      return await this.db.task('task-booking-bikes', task)
   }
   async findBookingWithBikesById_(bookingId) {
      //console.log('findBookingWithBikesById llamada por ----> ', quien)
      const task = async (t) => {
        //console.log('*** PRIMERA TASK')
         const bookingData = await t.one(
            BookingsRepository.bookingQueryFiles.findBookingById,
            //   this.bookingQueryFiles.findBookingById,
            {
               id: bookingId,
            }
         )
        //console.log('*** SEGUNDA TASK')
         const bikes = await t.many(
            BookingsRepository.bookingQueryFiles.findBookingBikesById,
            //this.bookingQueryFiles.findBookingBikesById,
            {
               id: bookingId,
            }
         )
         const res = { bookingData, bikes }
         //const res = booking
         return res
      }
      return await this.db.task('hola', task)
   }
   async findBookingPageData({ dateRange, date }) {
      //console.log('findBookingWithBikesById llamada por ----> ', quien)
      const task = async () => {
         // //console.log(' findBookingWithBikesById ---> this.db.task')
         const bookingDates = await this.findBookingDatesInRange(dateRange)
         const bookings = await this.findBookingOnDate(date)
         const res = { bookingDates, bookings }
         //const res = booking
         return res
      }
      const task1 = async () => {
         // //console.log(' findBookingWithBikesById ---> this.db.task')
         const bookingDates = await this.findBookingDatesInRange(dateRange)

         const res = { bookingDates }
         //const res = booking
         return res
      }
      const task2 = async () => {
         // //console.log(' findBookingWithBikesById ---> this.db.task')

         const bookings = await this.findBookingOnDate(date)
         const res = { bookings }
         //const res = booking
         return res
      }

      return await this.db.task('task-booking-page', task)
      const cnd = (c) => {
        //console.log('@@@@@@@@@@@@@@@@@@@@@@@@@ task context ----> ', c.ctx)
         // c.ctx - task/tx context (not available on the top level)
         // default condition: return !c.ctx;
         return true
      }
      return await this.db.taskIf({ cnd }, (t1) => {
         const bookingDates = this.findBookingDatesInRange(dateRange)
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
/*
function mapFnToQueryFile(obj, quien) {
   const bookingQueryFiles = Object.fromEntries(
      Object.entries(obj).map(([k, v], i) => [k, v()])
   )
  //console.log(
      quien,
      '    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -> '
      //,      bookingQueryFiles
   )
   return bookingQueryFiles
}
*/
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
   findBookingDatesInRange: sql(
      '/src/lib/pg-promise/sql/bookings/findBookingDatesInRange.sql'
   ),
   }
Este mismo archivo con la clase BookingsRepository está importando bookings de /sql/index.js
Entonces, cada vez que llamas a un método de BookingsRepository, se está ejecutando el código de /sql/index.js
y se está creando un nuevo objeto bookings con el método findBookingDatesInRange.
Esto genera el problema de pg promise sobre crear más de una vez un objeto QueryFile para el mismo archivo.
La solución es crear un campo privado en BookingsRepository que sea un objeto con todos los QueryFile. Si lo pones
como campo de clase (si #) o en el constructor, en principio no debería haber problema.

Una vez puesto el campo privado, hay que cambiar el método findBookingDatesInRange para que no ejecute la función
sql, sino que devuelva la propia funcion sql. Esto es porque el método findBookingDatesInRange se ejecuta cada vez
que se llama a un método de BookingsRepository, y si ejecuta la función sql, se crea un nuevo objeto QueryFile cada vez.

Entonces, cambio la función que puse al principio del comentario por esto:
   const bookings = {
   findBookingDatesInRange: () =>
      sql('/src/lib/pg-promise/sql/bookings/findBookingDatesInRange.sql'),
   }  
y en el constructor de BookingsRepository hago esto:
   BookingsRepository.bookingQueryFiles = mapObject(bookings)
mapObject va a recorrer el objeto bookings y va a devolver otro objeto con las mismas keys pero los valores, ahora, no son
la funciones, sino la ejecuión de las mismas. Así, BookingsRepository.bookingQueryFiles va a almacenar en cada key el objeto QueryFile
y a éllos se accede con BookingsRepository.bookingQueryFiles.findBookingDatesInRange, evitando así crear un nuevo objeto QueryFile cada vez
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
