const express = require('express')
const router = express.Router()

const { getContacts } = require('../controllers/controllerContacts')

/* GET Contacts */
router.get('/', getContacts)
// router.get('/:id', getContact)

module.exports = router
