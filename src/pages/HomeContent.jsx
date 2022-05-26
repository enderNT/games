import React from 'react'
import GamesList from '../components/GamesList'
import { useDispatch } from 'react-redux'
import { orderBy, nextPage } from '../redux/slices/games'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const HomeContent = () => {
	const dispatch = useDispatch()
	const PAGE = useParams()

	return (
		<>
			<div className='textContent'>
				<h3>New and trending</h3>
				<h6>Based on player counts and release date</h6>
			</div>

			<div className='homeContent__GamesOptions'>
				<select
					name='order'
					id='order'
					onChange={(event) => {
						dispatch(orderBy(event.target.value))
					}}
				>
					<option value='ASCadded'>Date added [0-9]</option>
					<option value='ASCname'>Name [a-Z]</option>
					<option value='ASCreleased'>Release date [0-9]</option>
					<option value='DESCadded'>Date added [9-0]</option>
					<option value='DESCname'>Name [Z-a]</option>
					<option value='DESCreleased'>Release date [9-0]</option>
				</select>
			</div>

			<div className='gamesList'>
				<GamesList />
			</div>

			<footer>
				<Link to='/games?page=2'>
					<button
						onClick={(e) => dispatch(nextPage(PAGE || 1 + 1))}
					>{`>`}</button>
				</Link>
			</footer>
		</>
	)
}

export default HomeContent
