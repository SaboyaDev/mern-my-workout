import { useState } from 'react'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'
import './workout-form.styles.css'

const defaultFormFields = {
	title: '',
	load: '',
	reps: '',
}

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext()

	const [formFields, setFormFields] = useState(defaultFormFields)
	const [error, setError] = useState(null)
	const [emptyFields, setEmptyFields] = useState([])

	const { title, load, reps } = formFields
	const workout = { title, load: parseInt(load), reps: parseInt(reps) }

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
		setError(null)
		setEmptyFields([])
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormFields({ ...formFields, [name]: value })
	}

	const handleSubmit = async e => {
		e.preventDefault()

		const response = await fetch('/api/workouts', {
			method: 'POST',
			body: JSON.stringify(workout),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		const json = await response.json()
		console.log(json)

		if (response.ok) {
			resetFormFields()
			dispatch({ type: 'CREATE_WORKOUT', payload: json })
		} else {
			setError(json.error)
			setEmptyFields(json.emptyFields)
		}
	}

	return (
		<form
			className='create'
			onSubmit={handleSubmit}
		>
			<h3>Add a New Workout</h3>

			<label>Exercise Title:</label>
			<input
				type='text'
				name='title'
				value={title}
				onChange={e => handleChange(e)}
				className={emptyFields.includes('title') ? 'error' : ''}
			/>
			<label htmlFor='load'>Load (lbs):</label>
			<input
				type='number'
				name='load'
				value={load}
				onChange={e => handleChange(e)}
				className={emptyFields.includes('load') ? 'error' : ''}
			/>
			<label htmlFor='reps'>Reps:</label>
			<input
				type='number'
				name='reps'
				value={reps}
				onChange={e => handleChange(e)}
				className={emptyFields.includes('reps') ? 'error' : ''}
			/>
			<button>Add Workout</button>
			{error && <div className='error'>{error}</div>}
		</form>
	)
}
export default WorkoutForm
