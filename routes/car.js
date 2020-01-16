const router = require('express').Router()
const User = require('../model/User')
const Car = require('../model/Car')
const verify = require('../middlewares/verifyToken')
const canAccess = require('../middlewares/canAccess')

router.get('/all', async (req, res) => {
    res.status(200).send(await Car.find({}))
})

router.post('/preorder/:carId/:userId', verify, canAccess(['User']), async (req, res) => {
    const car = Car.findById(req.params.carId)
    if(car) {
        const user = User.findById(req.params.userId)
        if(user) {
            car.preorders.push(user)
            return res.status(200).send('Preorder Successful.')
        }

        return res.status(404).send('User Not Found.')
    }

    res.status(404).status('Car Model Not Found.')
})

module.exports = router