import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './slices/games'
import { gamesApi } from './slices/gamesApi'

export const store = configureStore({
	reducer: {
		gamesReducer,
		[gamesApi.reducerPath]: gamesApi.reducer,
	},
	// middleware(getDefaultMiddleware) {
	// 	return getDefaultMiddleware().concat(gamesApi.middleware)
	// },
})
