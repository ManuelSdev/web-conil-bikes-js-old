import { createSelector, createSlice, current } from '@reduxjs/toolkit'

const initialState = {
   bikesConfig: {
      bikeSizeList: [],
      typeList: [],
      rangeList: [],
      segmentList: [],
   },
   // server: false,
}

export const appConfigSlice = createSlice({
   name: 'appConfig',
   initialState: {},
   reducers: {
      appConfigLoaded: (state, action) =>
         /*  
      console.log(
            'databaseInfoSlice ACTION PAYLOAD --------------------->>> ',
            action.payload
         ) ||
         */
         action.payload,

      appBikesConfigLoaded: (state, action) =>
         (state.bikesConfig = action.payload),
   },
})

export const { appConfigLoaded, appBikesConfigLoaded } = appConfigSlice.actions

export default appConfigSlice.reducer

const selectAppConfig = (state) => state.appConfig
const selectAppBikesConfig = (state) => state.appConfig.bikesConfig
/*
export const selectDatabaseInfoSegmentList = createSelector(
   [selectDatabaseInfo],
   (databaseInfo) =>
      //console.log('---------', databaseInfo.segmentList) ||
      databaseInfo.segmentList
)
*/
