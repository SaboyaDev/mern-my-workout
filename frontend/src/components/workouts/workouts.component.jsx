import { useEffect } from 'react'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'
import WorkoutDetails from '../workout-details/workout-details.component'

const Workouts = () => {
	const { workouts, dispatch } = useWorkoutsContext()

	useEffect(() => {
		const fetchWorkOuts = async () => {
			const response = await fetch('http://localhost:5002/api/workouts')
			const json = await response.json()

			if (response.ok) {
				dispatch({ type: 'SET_WORKOUTS', payload: json })
			}
		}

		fetchWorkOuts()
	}, [dispatch])

	return (
		<div className='workouts'>
			{workouts &&
				workouts.map(workout => (
					<WorkoutDetails
						key={workout._id}
						workout={workout}
					/>
				))}
		</div>
	)
}
export default Workouts
