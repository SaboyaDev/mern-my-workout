import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/workout-details/workout-details.component'
import './home.styles.css'

const Home = () => {
	const URL = 'http://localhost:5002'

	const [workouts, setWorkouts] = useState(null)

	useEffect(() => {
		const fetchWorkOuts = async () => {
			const response = await fetch(`${URL}/api/workouts`)
			await console.log(response)
			const json = await response.json()
			await console.log(json)

			response.ok && setWorkouts(json)
		}
		fetchWorkOuts()
	}, [])

	return (
		<div className='home'>
			<div className='workouts'>
				{workouts &&
					workouts.map(workout => (
						<WorkoutDetails
							key={workout._id}
							workout={workout}
						/>
					))}
			</div>
		</div>
	)
}
export default Home
