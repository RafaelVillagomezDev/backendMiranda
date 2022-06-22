const express = require('express')
const router = express.Router()
const { getProfile } = require('../controllers/controllerUsers')

/* GET Users list. */
// router.get('/', getUsers)

// router.get('/:id', getUser)
router.get('/profile', getProfile)
module.exports = router
