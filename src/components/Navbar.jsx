import React from 'react'

const Navbar = () => {
    return (
        <nav>
             <div className='containerImg'>
                <img src="ww.google.com" alt="logo" />
             </div>

             <form className='formSearch'>
                 <input type="text" placeholder='search games' />
                 <button type='submit'>Buscar</button>
             </form>

             <div className='userOptions'>
                <img src="www.google.com" alt="profile-img" />
                <h5>library</h5>
                <i>notifications</i>
             </div>
        </nav>
    )
}

export default Navbar
