'use client'
import React from 'react'
import BikeFiltersStep from './BikeFiltersStep'
import {
   useGetAppBikesConfigQuery,
   useGetAvailableSizesQuery,
} from '@/lib/redux/apiSlices/bikeApi'
import { useDispatch, useSelector } from 'react-redux'
import {
   bikeSearchParamsSelected,
   selectBikesByUnits,
   selectDateRange,
   selectSegmentList,
} from '@/lib/redux/slices/bookingFormSlice'
import { dateRangeISOStringObjToString } from '@/utils/datesFns/createDateRangeString'
import { Button } from '@/components/ui/button'
import Step from '../Step'
import SpinnerLine from '@/components/common/SpinnerLine'
import { useRouter } from 'next/navigation'
import { Select } from '@/components/ui/select'

export default function BikeFiltersStepHandler({
   setStep,
   segmentList,
   ...props
   //appBikesConfig,
   // availableSizes,
}) {
   //console.log('BikeFiltersStepUserHandler @@@->')
   const dispatch = useDispatch()
   const strDateRangeObj = useSelector(selectDateRange)
   const { from, to } = strDateRangeObj
   const isDateRange = !!from && !!to
   const storedBikesByUnits = useSelector(selectBikesByUnits)
   const router = useRouter()
   const dateRange = dateRangeISOStringObjToString(strDateRangeObj)
   //console.log('dateRange @->', isDateRange)

   //isDateRange || router.push('/bookingg/date')
   //const segmentList = useSelector(selectSegmentList)
   const {
      data: appBikesConfig,
      isLoading: isLoadingConfig,
      isSuccess,
      refetch,
      isFetching,
   } = useGetAppBikesConfigQuery()

   const { data: availableSizes, isLoading: isLoadingSizes } =
      useGetAvailableSizesQuery({ dateRange })

   const renderShowBikesButton = ({ size, type, range, className }) => (
      <Button
         className={className}
         onClick={() => {
            dispatch(bikeSearchParamsSelected({ size, type, range }))
            //   setStep(3)
         }}
         disabled={!range}
         //type="submit"
      >
         MOSTRAR BICICLETAS
      </Button>
   )
   const renderPrevButton = () => (
      <Button
         //   onClick={() => setStep(storedBikesByUnits.length === 0 ? 0 : 1)}
         className="text-greenCorp"
      >
         atrás
      </Button>
   )
   return (
      <BikeFiltersStep
         isLoadingSizes={isLoadingSizes}
         availableSizes={availableSizes}
         segmentList={segmentList}
         dateRange={dateRange}
         disabled={true}
         renderShowBikesButton={renderShowBikesButton}
         renderPrevButton={renderPrevButton}
      />
   )
}

const countries = { france: '🇫🇷', 'united-kingdom': '🇬🇧', spain: '🇪🇸' }

const Ess = () => {
   const [value, setValue] = React.useState('france')
   return (
      <Select.Root value={value} onValueChange={setValue}>
         <Select.Trigger>
            <Select.Value aria-label={value}>{countries[value]}</Select.Value>
            <Select.Icon />
         </Select.Trigger>
         <Select.Portal>
            <Select.Content>
               <Select.Viewport>
                  <Select.Item value="france">
                     <Select.ItemText>France</Select.ItemText>
                     <Select.ItemIndicator>…</Select.ItemIndicator>
                  </Select.Item>
                  <Select.Item value="united-kingdom">
                     <Select.ItemText>United Kingdom</Select.ItemText>
                     <Select.ItemIndicator>…</Select.ItemIndicator>
                  </Select.Item>
                  <Select.Item value="spain">
                     <Select.ItemText>Spain</Select.ItemText>
                     <Select.ItemIndicator>…</Select.ItemIndicator>
                  </Select.Item>
               </Select.Viewport>
            </Select.Content>
         </Select.Portal>
      </Select.Root>
   )
}
