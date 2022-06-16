const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const user = { userName: 'pepe', pass: '1234' }

const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

// manejamos el inicio de sesion --> la estrategia que hace el login que valida el usuario
passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'userName',
      passwordField: 'password',
    },
    async (userName, password, done) => {
      try {
        console.log(userName, password, user)
        if (userName === user.userName && password === user.pass) {
          return done(null, user, { message: 'Logged in Successfully' })
        }
        return done(null, false, {
          message: 'User not found or Wrong Password',
        })
      } catch (error) {
        console.error(error)
        return done(error)
      }
    },
  ),
)

// Inicio de sesión de los usuarios (tambien registro).
/* el siguiente paso es permitir que los usuarios con tokens accedan a ciertas rutas seguras.
En este paso, verificará que los tokens no hayan sido manipulados y sean válidos.
*/
passport.use(
  new JWTstrategy(
    {
      secretOrKey: 'miranda',
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
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
