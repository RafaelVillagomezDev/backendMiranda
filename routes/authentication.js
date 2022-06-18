const express = require('express')
const router = express.Router()
const passport = require('passport')
//Auth
require('../auth/auth')
const jwt = require('jsonwebtoken')

router.post(
  '/register',
  //Ponemos sesion falsa por que no queremos sesiones
  passport.authenticate('register', { session: false }),
  async (req, res, next) => {
    res.json({
      messague: 'Registrado',
      user: req.user,
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
          username: user.username,
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
