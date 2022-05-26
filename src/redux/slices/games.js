import { createSlice } from '@reduxjs/toolkit'

const gamesState = {
	ordered: 'name',
	page: 1,
	games: [],
	error: false,
}

export const gamesSlice = createSlice({
	name: 'games',
	initialState: gamesState,
	reducers: {
		orderBy(state, action) {
			const orders = {
				ASCname: 'name',
				ASCreleased: 'released',
				ASCadded: 'added',
				DESCname: '-name',
				DESCreleased: '-released',
				DESCadded: '-added',
			}
			const caseDefault = 'name'
			state.ordered = orders[action.payload] || caseDefault
		},
		nextPage(state, { payload }) {
			state.page = payload
		},
		setGames(state, { payload }) {
			state.games = payload
		},
	},
})

export const { orderBy, nextPage, setGames } = gamesSlice.actions
export default gamesSlice.reducer
