// import {useEffect} from 'react'
import Workouts from '../components/workouts/workouts.component'
import WorkoutForm from '../components/workout-form/workout-form.component'
import './home.styles.css'

const Home = () => {
	// useEffect(() => {

	// } [])

	return (
		<div className='home'>
			<Workouts />
			<WorkoutForm />
		</div>
	)
}
export default Home
