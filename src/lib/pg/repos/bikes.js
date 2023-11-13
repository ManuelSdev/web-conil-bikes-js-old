import { query } from '../db'

export const findAvailableSizesInRange = async ({ dateRange }) => {
   const text = 'SELECT * FROM get_sizes($1)'
   const values = [dateRange]
   const rowMode = 'array'
   const { rows } = await query({ text, values, rowMode })
   return rows.flatMap((r) => r)
}

export const findAvailableTypes = async ({ dateRange, size }) => {
   const text = 'SELECT * FROM get_available_types($1, $2)'
   const values = [dateRange, size]
   const rowMode = 'array'
   const { rows } = await query({ text, values, rowMode })
   return rows.flatMap((r) => r)
}

export const findAvailableRanges = async ({ dateRange, size, type }) => {
   const text = 'SELECT * FROM get_available_ranges($1, $2, $3)'
   const values = [dateRange, size, type]
   const rowMode = 'array'
   const { rows } = await query({ text, values, rowMode })
   console.log('rows en findAvailableRanges -> ', rows)
   return rows.flatMap((r) => r)
}

export const findAvailableBikes = async ({ dateRange, size, type, range }) => {
   const text = 'SELECT * FROM get_available_bikes($1, $2, $3, $4)'
   const values = [dateRange, size, type, range]
   console.log('values en findAvailableBikes -> ', values)
   //const rowMode = 'array'
   const { rows } = await query({ text, values })
   /**
    * CLAVE: a pesar de que la funcion pl usa snake_case,
    */
   console.log('rows en findAvailableBikes -> ', rows)
   return rows
}

export const findAppBikeConfigSegments = async () => {
   const text =
      'SELECT model_type as "modelType", model_range as "modelRange", segment_price as "segmentPrice" FROM Segment'
   const { rows } = await query({ text })
   console.log('rows en findBikeConfigSegments -> ', rows)
   return rows
}
