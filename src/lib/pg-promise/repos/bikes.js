const columnSet = {} // Reusable ColumnSet objects.

import { ro } from 'date-fns/locale'
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
   /*
   static bookingQueryFiles =
      console.log('2 ### ejecuta OBJECT ENTRIES BikesRepository ') ||
      Object.fromEntries(Object.entries(bikes).map(([k, v], i) => [k, v()]))
      */
   constructor(db, pgp) {
      this.db = db
      this.pgp = pgp
      console.log('*** Instancia BikesRepository creada')

      this.bikesQueryFiles = Object.fromEntries(
         Object.entries(bikes).map(([k, v], i) => [k, v()])
      )
   }
   /**
    *
    * @param {string} dateRange - format '[2023-10-04T22:00:00.000Z,2023-10-31T22:59:59.999Z]'
    * @returns {Promise<Array>} - Array of available bike sizes - format ['S','M','L'] pero en minusculas
    */
   async findAvailableSizesInRange(dateRange) {
      //console.log('query -----------> ',this.pgp.as.format(bookings.findBookingDatesInRange, { dateRange }))
      //TODO: revisar si esto de abajo debe llevar await
      //https://github.com/vitaly-t/pg-promise#named-parameters
      //console.log('BookingsRepository.#bookingQueryFiles -> ',BookingsRepository.bookingQueryFiles)
      const sizes = await this.db.map(
         //   BikesRepository.bookingQueryFiles.findAvailableSizesInRange,
         this.bikesQueryFiles.findAvailableSizesInRange,
         {
            dateRange,
         },
         (row) => row.bike_size
      )
      // console.log('sizes ------------------------------>', sizes)
      return sizes
   }
   async findAvailableTypes({ dateRange, size }) {
      const types = await this.db.map(
         // BikesRepository.bookingQueryFiles.findAvailableTypes,
         this.bikesQueryFiles.findAvailableTypes,
         {
            dateRange,
            size,
         },
         (row) => row.model_type
      )
      console.log('types ------------------------------>', types)
      return types
   }
   async findAvailableRanges({ dateRange, size, type }) {
      const ranges = await this.db.map(
         // BikesRepository.bookingQueryFiles.findAvailableTypes,
         this.bikesQueryFiles.findAvailableRanges,
         {
            dateRange,
            size,
            type,
         },
         (row) => row.model_range
      )
      console.log('ranges ------------------------------>', ranges)
      return ranges
   }
   async findAvailableBikes({ dateRange, size, type, range }) {
      const bikes = await this.db.any(
         // BikesRepository.bookingQueryFiles.findAvailableTypes,
         this.bikesQueryFiles.findAvailableBikes,
         {
            dateRange,
            size,
            type,
            range,
         }
         //(row) => row.model_range
      )
      console.log('bikes ------------------------------>', bikes)
      return bikes
   }
   async findAppBikesConfig() {
      const task = async (t) => {
         const sizeList = await t.map(
            'SELECT * FROM bike_size',
            null,
            (row) => [row.bike_size, row.min_height, row.max_height]
         )
         const typeList = await t.map(
            'SELECT * FROM model_type',
            null,
            (row) => row.model_type
         )
         const rangeList = await t.map(
            'SELECT * FROM model_range',
            null,
            (row) => row.model_range
         )
         const segmentList = await t.many(
            `SELECT
               model_type as "modelType",
               model_range as "modelRange",
               segment_price as "segmentPrice"
            FROM
               Segment`
         )
         const res = { sizeList, typeList, rangeList, segmentList }
         return res
      }
      return await this.db.task('findAppBikesConfig', task)
   }
}
