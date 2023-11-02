import { getAvailableBikeTypes } from '@/lib/pg-promise/crud/bikes'

export async function GET(req, { params }) {
   const { dateRange, size } = params
   //console.log('dateRange @-> ', dateRange)
   //  '[2023-10-04T22:00:00.000Z,2023-10-31T22:59:59.999Z]'

   return await getAvailableBikeTypes({ dateRange, size })
}
