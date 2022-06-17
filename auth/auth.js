const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/userSchema')

//Midlewares
passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    //Se ejecuta una vez validados
    async (username, password, done) => {
      try {
        console.log('entra')
        //Create activa el midleware save es lo mismo que  new MyModel(doc).save()
        const user = await User.create({ username, password })
        return done(null, user)
      } catch (e) {
        done(e)
      }
    },
  ),
)

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        //Me busca en mi base de datos por el filtro de usuario

        const user = await User.findOne({ username: username })

        if (!user) {
          return done(null, false, { message: 'Usuario no encontrado' })
        }

        const validate = await User.isValidPassword(password)

        if (!validate) {
          return done(null, false, { message: 'Usuario no encontrado' })
        }
        console.log(validate)
        return done(null, false, { message: 'Login succesful' })
      } catch (e) {
        return done(e)
      }
    },
  ),
)
