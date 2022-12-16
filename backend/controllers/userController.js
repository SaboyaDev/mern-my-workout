const loginUser = async (req, res) => {
	res.json({ mssg: 'Login User' })
}

const signupUser = async (req, res) => {
	res.json({ mssg: 'Signup User' })
}

module.exports = { loginUser, signupUser }
