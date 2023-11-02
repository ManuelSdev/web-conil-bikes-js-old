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
   static bookingQueryFiles =
      console.log('2 ### ejecuta OBJECT ENTRIES BikesRepository ') ||
      Object.fromEntries(Object.entries(bikes).map(([k, v], i) => [k, v()]))
   constructor(db, pgp) {
      this.db = db
      this.pgp = pgp
      console.log('*** Instancia BikesRepository creada')

      /*
      this.bikesQueryFiles = Object.fromEntries(
         Object.entries(bikes).map(([k, v], i) => [k, v()])
      )
      */
   }
   /**
    *
    * @param {string} dateRange - format '[2023-10-04T22:00:00.000Z,2023-10-31T22:59:59.999Z]'
    * @returns {Promise<Array>} - Array of available bike sizes - format ['S','M','L'] pero en minusculas
    */
   async findAvailableBikeSizesInRange(dateRange) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesInRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',BookingsRepository.bookingQueryFiles)
      const sizes = await this.db.map(
         BikesRepository.bookingQueryFiles.findAvailableBikeSizesInRange,
         //    this.bikesQueryFiles.findAvailableBikeSizesInRange,
         {
            dateRange,
         },
         (row) => row.bike_size
      )
      // console.log('sizes ------------------------------>', sizes)
      return sizes
   }
   async findAvailableBikeTypes({ dateRange, size }) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesInRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',BookingsRepository.bookingQueryFiles)
      const sizes = await this.db.any(
         BikesRepository.bookingQueryFiles.findAvailableBikeTypes,
         //    this.bikesQueryFiles.findAvailableBikeTypes,
         {
            dateRange,
            size,
         }
         // (row) => row.bike_size
      )
      //  console.log('sizes ------------------------------>', sizes)
      return sizes
   }
}
