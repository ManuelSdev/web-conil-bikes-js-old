import { createSelector, createSlice, current } from '@reduxjs/toolkit'

const initialState = {
   bikesConfig: {
      bikeSizeList: [],
      typeList: [],
      rangeList: [],
      segmentList: [],
   },
   isLoadingPage: false,
   // server: false,
}

export const appConfigSlice = createSlice({
   name: 'appConfig',
   initialState: {},
   reducers: {
      appConfigLoaded: (state, action) =>
         /*  
     //console.log(
            'databaseInfoSlice ACTION PAYLOAD --------------------->>> ',
            action.payload
         ) ||
         */
         action.payload,

      appBikesConfigLoaded: (state, action) => {
         state.bikesConfig = action.payload
      },
      appIsloadingPage: (state, action) => {
         state.isLoadingPage = action.payload
      },
   },
})

export const { appConfigLoaded, appBikesConfigLoaded, appIsloadingPage } =
   appConfigSlice.actions

export default appConfigSlice.reducer

const selectAppConfig = (state) => state.appConfig

export const selectAppBikesConfig = createSelector(
   [selectAppConfig],
   (appConfig) =>
      //console.log('---------', databaseInfo.segmentList) ||
      appConfig.bikesConfig
)
export const selectAppIsLoadingPage = createSelector(
   [selectAppConfig],
   (appConfig) =>
      //console.log('---------', databaseInfo.segmentList) ||
      appConfig.isLoadingPage
)
/*
export const selectDatabaseInfoSegmentList = createSelector(
   [selectDatabaseInfo],
   (databaseInfo) =>
      //console.log('---------', databaseInfo.segmentList) ||
      databaseInfo.segmentList
)
*/
