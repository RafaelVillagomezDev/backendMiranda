const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/userSchema')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const bcrypt = require('bcrypt')

//Midlewares
//Si esto tiene exito mediante next() enviamos la informacion del usuario al siguiente midleware
passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    //Se ejecuta una vez validados
    async (email, password, done) => {
      try {
        //Create activa el midleware save es lo mismo que  new MyModel(doc).save()

        const user = { email, password }

        return done(null, user)
      } catch (error) {
        done(error)
      }
    },
  ),
)

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        //Me busca en mi base de datos por el filtro de usuario

        const user = await User.findOne({ email })

        if (!user) {
          return done(null, false, { message: 'Usuario no encontrado' })
        }
        //Validamos las contraseñas cifradas de la bdd con las que introducimos
        const validate = await bcrypt.compare(password, user.password)

        if (!validate) {
          return done(null, false, { message: 'Bad Password ' })
        }

        return done(null, user, { message: 'Login succesful' })
      } catch (error) {
        return done(error)
      }
    },
  ),
)
//Creamos un token
passport.use(
  new JWTStrategy(
    {
      secretOrKey: 'TOP_SECRET',
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token'),
    },
    async (token, done) => {
      try {
        return done(null, token.user)
      } catch (error) {
        done(error)
      }
    },
  ),
)
