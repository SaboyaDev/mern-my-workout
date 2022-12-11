import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/home.component'
import Navbar from './components/navbar/navbar.component'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<div className='pages'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
