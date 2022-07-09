const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/userSchema')
//Auth
require('../auth/auth')
const jwt = require('jsonwebtoken')

router.post(
  '/register',
  //Ponemos sesion falsa por que no queremos sesiones
  passport.authenticate('register', { session: false }),
  async (req, res, next) => {
    const user = new User({
      email: req.user.email,
      password: req.user.password,
      phone: req.body.phone,
      description: req.body.description,
      status: req.body.status,
      position: req.body.position,
    })

    User.create(user, function (err, user) {
      if (err) {
        console.log('Error creating User: ', err)
        res.status(400).json(err)
      } else {
        console.log('User Created: ', user)
        res.status(200).json(user)
      }
    })
  },
)

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error('An error ocurred')
        return next(error)
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error)
        //Nunca le pasamos la password al token ya que esto es un erro grave de seguridad

        const body = {
          _id: user._id,
          email: user.email,
          position: user.position,
        }

        const token = jwt.sign({ user: body }, 'TOP_SECRET')

        return res.json({ token })
      })
    } catch (error) {
      return next(error)
    }
  })(req, res, next)
})

module.exports = router
