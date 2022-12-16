const express = require('express')

const {
	findWorkouts,
	findWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
} = require('../controllers/workoutController')

const workRouter = express.Router()

// GET all workouts
workRouter.get('/', findWorkouts)

// GET a sigle workout
workRouter.get('/:id', findWorkout)

// POST a new workout
workRouter.post('/', createWorkout)

// DELETE a workout
workRouter.delete('/:id', deleteWorkout)

// UPDATE a new workout
workRouter.patch('/:id', updateWorkout)

module.exports = workRouter
