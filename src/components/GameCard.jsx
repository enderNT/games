import React from 'react'

const GameCard = () => {
    return (
        <>
            <header className='gameCard__Header'>
                <img src="www.google.com" alt="google-name" />
            </header>

            <div className='gameCard__Body'>
                <div className='gameCard__platforms'>
                    <i>1</i>
                    <i>2</i>
                    <i>3</i>
                </div>

                <h3>NOMBRE DEL JUEGO</h3>
                <button>LIKES</button>

                <button>calificar</button>
            </div>
        </>
    )
}

export default GameCard
