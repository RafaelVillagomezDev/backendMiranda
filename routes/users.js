const express = require('express')
const router = express.Router()

const { getProfile, getUsers } = require('../controllers/controllerUsers')

/* GET Users list. */
// router.get('/', getUsers)

router.get('/', getUsers)
router.get('/profile', getProfile)
module.exports = router
