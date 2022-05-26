import React from 'react'

const GameCard = ({ game }) => {
	const {
		id,
		name,
		released,
		tba,
		background_image,
		rating,
		rating_top,
		parent_platforms,
		genres,
	} = game
	return (
		<>
			<header className='gameCard__Header'>
				<img
					src={background_image}
					alt={name}
					style={{
						objectFit: 'contain',
						width: '100%',
					}}
				/>
			</header>

			<div className='gameCard__Body'>
				{/* parent platforms */}
				<div className='gameCard__platforms'>
					<i>1</i>
					<i>2</i>
					<i>3</i>
				</div>

				<h3>{name}</h3>
				<button>WishList</button>

				<button>{rating}</button>
				{/* <table> */}
				{/* <td>Released: {released}</td> */}
				{/* genres */}
				{/* <td>Genres</td> */}
				{/* <td># {rating_top}</td> */}
				{/* </table> */}
			</div>
		</>
	)
}

export default GameCard
