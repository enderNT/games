import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../../utils'

export const gamesApi = createApi({
	reducerPath: 'gamesApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getAllGames: builder.query({
			// query({ page = 1, ordering = 'name' }) {
			query({ page, ordering }) {
				return `games?key=a79024650d994798bd9393e9b3589b18&page=${page}&ordering=${ordering}`
			},
		}),
	}),
})

export const { useGetAllGamesQuery } = gamesApi
