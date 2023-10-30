const columnSet = {} // Reusable ColumnSet objects.

import { bikes } from '../sql'
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
export default class BikesRepository {
   static mapFnToQueryFile(obj) {
      const bikesQueryFiles = Object.fromEntries(
         Object.entries(obj).map(([k, v], i) => [k, v()])
      )
      console.log(
         ' 2 ### ejecuta mapFnToQueryFile en clase BikesRepository '
         //,      bookingQueryFiles
      )
      return bikesQueryFiles
   }

   static bikesQueryFiles = Object.fromEntries(
      Object.entries(bikes).map(([k, v], i) => [k, v()])
   )
   constructor(db, pgp) {
      this.db = db
      this.pgp = pgp
   }
   /**
    *
    * @param {string} dateRange - format '[2023-10-04T22:00:00.000Z,2023-10-31T22:59:59.999Z]'
    * @returns {Promise<Array>} - Array of avaiable bike sizes - format ['S','M','L'] pero en minusculas
    */
   async findAvaiableBikeSizesOnRange(dateRange) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesOnRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',BookingsRepository.bookingQueryFiles)
      const sizes = await this.db.map(
         BikesRepository.bikesQueryFiles.findAvaiableBikeSizesOnRange,
         {
            dateRange,
         },
         (row) => row.bike_size
      )
      //  console.log('sizes ------------------------------>', sizes)
      return sizes
   }
}
