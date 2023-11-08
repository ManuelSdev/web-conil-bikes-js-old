import { getAppBikesConfig } from '@/lib/pg-promise/crud/bikes'

export async function GET(req) {
   return await getAppBikesConfig()
}
