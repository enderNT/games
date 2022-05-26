import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router'
import HomeContent from '../pages/HomeContent'

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/games' element={<HomeContent />} />
			</Routes>
		</>
	)
}

export default App
