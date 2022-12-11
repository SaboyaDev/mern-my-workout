const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

require('dotenv').config()
const { PORT, MONGO_URI } = process.env

const app = express()

// Middleware

// converts our responses to JSON and access it wit . notation
app.use(express.json())

// just monitore our requests
app.use((req, res, next) => {
	console.log({
		Path: req.path,
		Method: req.method,
	})
	next()
})

// Router
app.use('/api/workouts', workoutRoutes)

// Connect to DB
mongoose
	.connect(MONGO_URI)
	.then(() => {
		app.listen(PORT, (req, res) => {
			console.log(
				`\nConnected to DB & Listening on Port ${PORT} http://localhost:${PORT}`
			)
		})
	})
	.catch(error => console.log(error))
