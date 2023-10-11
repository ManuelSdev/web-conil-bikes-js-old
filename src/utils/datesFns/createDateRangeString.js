import {
   addMonths,
   endOfISOWeek,
   endOfMonth,
   endOfWeek,
   lastDayOfMonth,
   set,
   startOfISOWeek,
   startOfMonth,
   startOfWeek,
} from 'date-fns'
import { pipe } from '../commonFns'
import { es } from 'date-fns/locale'

/**
 * @description Función que crea un string con un rango de fechas en formato ISO: '[from,to]'
 * Si no se le pasa ningún parámetro, devuelve el rango de fechas del mes actual
 * @param {Date} fromDate - objeto Date con la fecha de inicio del rango
 * @returns {string} - string con el rango de fechas en formato ISO: '[from,to]'
 */
//La fecha de entrada es el primer día del mes o null
//TODO: mira la opcion metiendo locale cuando pruebes otros idiomas
export default function createDateRangeString({
   fromDate = null,
   outsideDates = false,
}) {
   const today = set(new Date(), {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
   })

   const fromDateToDateRangeObj = (from) => {
      // console.log('FROM QUE ENTRA EN fromDateToDateRangeObj -> ', from)
      const startMonth = from ? startOfMonth(from) : startOfMonth(today)
      const endMonth = from ? endOfMonth(from) : endOfMonth(today)

      if (!outsideDates) {
         const dateRanges = from
            ? { from: from, to: addMonths(from, 1) }
            : { from: today, to: endOfMonth(today) }
         const dateRange = { from: startMonth, to: endMonth }
         // console.log(' setDateRange -> ', dateRange)
         // console.log(' setDateRangesssssssssss -> ', dateRanges.to.toISOString())
         return dateRange
      }
      if (outsideDates) {
         const monthStartWeek = startOfWeek(startMonth)
         const monthEndWeek = endOfISOWeek(endMonth)
         const dateRange = { from: monthStartWeek, to: monthEndWeek }

         return dateRange
      }
   }

   const dateRangeObjToISOStringObj = ({ from, to }) => ({
      from: from.toISOString(),
      to: to.toISOString(),
   })

   const dateRangeISOStringObjToString = ({ from, to }) => `[${from},${to}]`

   const createDateRangeString = (fromDate) =>
      pipe(
         fromDateToDateRangeObj,
         dateRangeObjToISOStringObj,
         dateRangeISOStringObjToString
      )(fromDate)
   const dateRangeString = createDateRangeString(fromDate)
   return dateRangeString
}
/*
const today = set(new Date(), {
   hours: 0,
   minutes: 0,
   seconds: 0,
   milliseconds: 0,
})
//primer día del mes a las 00:00 horas
const startMonth = startOfMonth(today)
console.log('startMonth ->', startMonth)

const monthStartWeek = startOfWeek(startMonth)
const monthStartWeekEs = startOfWeek(startMonth, { locale: es })
const monthStartISOWeek = startOfISOWeek(startMonth)
console.log('monthStartWeek ->', monthStartWeek)
console.log('monthStartWeek toISOString ->', monthStartWeek.toISOString())
console.log('monthStartWeekEs ->', monthStartWeekEs)
console.log('monthStartISOWeek ->', monthStartISOWeek)

// último dia del mes a la última hora
const endMonth = endOfMonth(today)
//ultimo día del mes a las 00:00 horas
const lastDayMonth = lastDayOfMonth(today)
console.log('endMonth ->', endMonth)
console.log('lastDayMonth ->', lastDayMonth)

//penúltimo día de la ultima semana del mes a la útlima hora
console.log('//////////////////// endMonth ////////////////////')
const monthEndWeek = endOfWeek(endMonth)
//Los dos que siguen pillan ultimo dia ultima hora
const monthEndWeekEs = endOfWeek(endMonth, { locale: es })
const monthEndISOWeek = endOfISOWeek(endMonth)
console.log('monthEndWeek ->', monthEndWeek)
console.log('monthEndWeekEs ->', monthEndWeekEs)
console.log('monthEndISOWeek ->', monthEndISOWeek)
console.log('monthEndWeek toISOString ->', monthEndWeek.toISOString())

console.log('//////////////////// lastDayMonth ////////////////////')
const lastDayInLastWeek = endOfWeek(lastDayMonth)
const lastDayInLastWeekEs = endOfWeek(lastDayMonth, { locale: es })
const lastDayInLastWeekISO = endOfISOWeek(lastDayMonth)
console.log('lastDayInLastWeek ->', lastDayInLastWeek)
console.log('lastDayInLastWeekEs ->', lastDayInLastWeekEs)
console.log('lastDayInLastWeekISO ->', lastDayInLastWeekISO)
console.log('lastDayInLastWeek toISOString ->', lastDayInLastWeek.toISOString())
*/
