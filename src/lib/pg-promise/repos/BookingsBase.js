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
//const bookingQueryFiles = mapFnToQueryFile(bookings)
export default class BookingsBase {
   static #staticConstructorDummyResult = (function () {
     //console.log(
         '+++++++++++++++++++++++++++++++++++++++ static constructor called'
      ) // once!
   })()
   static mapFnToQueryFile(obj = bookings) {
      const bookingQueryFiles = Object.fromEntries(
         Object.entries(obj).map(([k, v], i) => [k, v()])
      )
     //console.log(
         '    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ -> '
         //,      bookingQueryFiles
      )
      return bookingQueryFiles
   }
   static #bookings = { ...bookings }
   static bookingQueryFiles =
     //console.log(
         '===================================????????????????????????????????'
      ) ||
      Object.fromEntries(
         Object.entries(BookingsBase.#bookings).map(([k, v], i) => [k, v()])
      )
   constructor() {
     //console.log(
         '********************************* instance constructor called ********************************'
      )
   }
}
