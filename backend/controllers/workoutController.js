const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// Utility Functions
/* ---------------------- */
const checkId = (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ error: 'Invalid Document ID Format' })
	} else {
		return id
	}
}

const checkDocument = (workout, res) => {
	!workout
		? res.status(400).json({ error: 'No Such Workout' })
		: res.status(200).json(workout)
}

// Controllers
/* ---------------------- */
// Get all workouts --> Model.find({})
const findWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdAt: -1 })
	res.status(200).json(workouts)
}

// Get a  single workout --> Model.findById()
const findWorkout = async (req, res) => {
	const id = await checkId(req, res)
	const workout = await Workout.findById(id)
	checkDocument(workout, res)
}

// Create a new workout --> Model.create()
const createWorkout = async (req, res) => {
	const { title, load, reps } = req.body

	// Add doc to DB
	try {
		const workout = await Workout.create({ title, load, reps })
		res.status(200).json(workout)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// Delete a workout --> Model.findOneAndDelete()
const deleteWorkout = async (req, res) => {
	const id = await checkId(req, res)
	const workout = await Workout.findOneAndDelete({ _id: id })
	checkDocument(workout, res)
}

// Update a workout --> Model.updateOne()
const updateWorkout = async (req, res) => {
	const id = await checkId(req, res)
	const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
	checkDocument(workout, res)
}

module.exports = {
	findWorkouts,
	findWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
}
