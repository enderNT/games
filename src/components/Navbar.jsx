import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<div className='containerImg'>
				<Link to='/games'>
					<img src='ww.google.com' alt='logo' />
				</Link>
			</div>

			<form className='formSearch'>
				<input type='text' placeholder='search games' />
				<button type='submit'>Buscar</button>
			</form>

			<div className='userOptions'>
				<img src='www.google.com' alt='profile-img' />
				<h5>library</h5>
				<i>notifications</i>
			</div>
		</nav>
	)
}

export default Navbar
