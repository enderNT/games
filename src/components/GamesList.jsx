import React, { useEffect, useState } from 'react'
import GameCard from './GameCard'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllGamesQuery } from '../redux/slices/gamesApi'
import { setGames } from '../redux/slices/games'

const GamesList = () => {
	const dispatch = useDispatch()
	const [error, setError] = useState(false)

	const { ordered, page, games } = useSelector((state) => state.gamesReducer)

	const { isError, isLoading, data } = useGetAllGamesQuery({
		page,
		ordering: ordered,
	})

	useEffect(() => {
		if (!isLoading) {
			console.log(data.results[0])
			setError(false)
			dispatch(setGames(data.results))
			return
		} else if (isError) {
			setError(true)
			return
		}
	}, [ordered, page, isLoading, isError])

	return (
		<>
			{error ? (
				<h1>Something went wrong</h1>
			) : (
				<ul>
					{games?.map((game) => {
						return (
							<li className='gameCard' key={`${game.id}`}>
								<div
									style={{
										maxWidth: '250px',
									}}
								>
									<GameCard game={game} />
								</div>
							</li>
						)
					})}
				</ul>
			)}
		</>
	)
}

export default GamesList
