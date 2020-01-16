const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

const port = process.env.PORT || 3000
const authRoutes = require('./routes/auth')
const carRoutes = require('./routes/car')
dotenv.config()

mongoose.connect(
	'mongodb+srv://revanthpothukuchi123@gmail.com:AZSZnrmr89R!R!@apace-zpvel.mongodb.net/test?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => console.log('Connected To Database.')
)  

app.use(express.json())
app.use('/api/user', authRoutes)
app.use('/api/car', carRoutes)

if(process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/public/'))
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, preLoadData())

function preLoadData() {
	const User = require('./model/User')
	const Car = require('./model/Car')
	const bcrypt = require('bcryptjs')
	User.deleteMany({}, async () => {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash('Revanth123', salt)
		const admin = new User({
			name: 'Revanth Pothukuchi',
			email: 'revanthpothukuchi123@gmail.com',
			password: hashedPassword,
			roles: ['User', 'Admin'],
		})

		await admin.save()
	})

	Car.deleteMany({}, async () => {
		const apaceModel1 = new Car({
			name: 'Apace Model 1',
			detail:
				'A revolutionary electric car that redefines safety and performance',
			price: 40000,
		})

		await apaceModel1.save()
	})

	console.log(`Server Started On Port ${port}.`)
}
