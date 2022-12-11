const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
const { response } = require('express')

// Get all workouts --> Model.find({})
const findWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdAt: -1 })
	res.status(200).jsong(workouts)
}

// Get a  single workout --> Model.findById()
const findWorkout = async (req, res) => {
	const { id } = req.params

	!mongoose.Types.ObjectId.isValid(id) &&
		res.status(400).json({ error: 'Invalid Document ID Format' })

	const workout = await Workout.findById(id)

	!workout
		? res.status(400).json({ error: 'No Such Workout' })
		: res.status(200).json(workout)
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
	const { id } = req.params

	!mongoose.Types.ObjectId.isValid(id) &&
		res.status(400).json({ error: 'Invalid Document ID Format' })

	const workout = await Workout.findOneAndDelete({ _id: id })

	!workout
		? res.status(400).json({ error: 'No Such Workout' })
		: res.status(200).json(workout)
}

// Update a workout --> Model.updateOne()
const updateWorkout = async (req, res) => {
	const { id } = req.params

	!mongoose.Types.ObjectId.isValid(id) &&
		res.status(400).json({ error: 'Invalid Document ID Format' })

	const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })

	workout
		? res.status(200).json(workout)
		: res.status(400).json({ error: 'No Such Workout' })
}

module.exports = {
	findWorkouts,
	findWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
}
