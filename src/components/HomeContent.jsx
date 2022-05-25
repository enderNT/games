import React from 'react'
import GamesList from './GamesList'

const HomeContent = () => {
    return (
        <>
            <div className='textContent'>
                <h3>New and trending</h3>
                <h6>Based on player counts and release date</h6>
            </div>

            <div className='homeContent__GamesOptions'>
                <select name="order" id="order">
                    <option value="Relevance">Relevance</option>
                    <option value="Date added">Date added</option>
                    <option value="Name">Name</option>
                    <option value="Release date">Release date</option>
                    <option value="Popularity">Popularity</option>
                    <option value="Average rating">Average rating</option>
                </select>
            </div>

            <div className='gamesList'>
                <GamesList />
            </div>
        </>
    )
}

export default HomeContent
