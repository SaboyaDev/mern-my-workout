import { WorkoutContext } from '../context/WorkoutContext.js'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
	const context = useContext(WorkoutContext)

	if (!context) {
		throw Error(
			'useWorkoutsContext must be used inside a WorkoutsContextProvider'
		)
	}

	return context
}

/* 
  Contex now holds the value -> state & dispatch function
  <WorkoutContext.Provider value={{ state, dispatch }}>
		{children}
	</WorkoutContext.Provider>
*/
