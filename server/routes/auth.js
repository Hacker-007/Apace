const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../middlewares/validation')

router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message)
    }

    const emailExists = await User.findOne({ email: req.body.email })
    if(emailExists) {
        return res.status(400).send('Email Already Exists.')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    let hours = 0
    if(req.body.hours) {
        hours = req.body.hours
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        grade: req.body.grade,
        hours: hours,
        password: hashedPassword
    })

    try {
        const savedUser = await user.save()
        res.status(201).send({
            user: {
                id: user._id,
                name: user.name
            }
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body)
    if(error) {
        return res.status(400).send('Invalid Information.')
    }

    const user = await User.findOne({ email: req.body.email })
    if(!user) {
        return res.status(400).send('Invalid Information.')
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) {
        return res.status(400).send('Invalid Information.')
    }

    const token = jwt.sign({ id: user._id, name: user.name, roles: user.roles }, process.env.TOKEN_SECRET)

    res.status(200).send({ token })
})

module.exports = router