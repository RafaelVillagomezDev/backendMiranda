const express = require('express')
const router = express.Router()
const { getUsers, getUser } = require('../controllers/controllerUsers')

/* GET Users list. */
router.get('/', getUsers)
router.get('/:id', getUser)

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
