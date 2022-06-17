const express = require('express')
const passport = require('passport')
const router = express.Router()

const {
  getUsers,
  getUser,
  postUser,
} = require('../controllers/controllerUsers')
//Auth
require('../auth/auth')
const jwt = require('jsonwebtoken')

/* GET Users list. */
router.get('/', getUsers)
router.get('/:id', getUser)
// router.post('/user/register', postUser)
router.post(
  '/user/register',
  passport.authenticate('register', { session: false }),
  async (req, res, next) => {
    res.json({
      messague: 'Registrado',
      user: req.user,
    })
  },
)

router.post('/user/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || user) {
        const error = new Error('new Error')
        return next(error)
      }
      req.login(user, { session: false }, async (err) => {
        if (err) return next(err)
        const body = {
          _id: user._id,
          username: user.username,
        }
        //Semilla shabadum
        const token = jwt.sign({ user: body }, 'shabadum')

        return res.json({ token })
      })
    } catch (e) {
      return next(e)
    }
  })(req, res, next)
})

module.exports = router

//EJEMPLO SI EL ID ES 0 ENTONCES MUESTRA ERRO SI NO , MOSTRAMOS OTRA COSA , CON NEXT ROUTE SUDA DE LO Q ESTA EN
//EL IF Y CON NEXT() PASA A LA SIGUIENTE FUNCION
// router.get(
//   '/user/:id',
//   (req, res, next) => {
//     // if the user ID is 0, skip to the next router
//     if (req.params.id === '0') {
//       res.send('Error id de 0')
//       next('route')
//       // otherwise pass control to the next middleware function in this stack
//     } else next()
//   },
//   (req, res, next) => {
//     // render a regular page
//     res.send('no soy 0')
//   },
// )
