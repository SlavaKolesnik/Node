const {
    getSingleUserHandler,
    getUsersHandler,
    postUsersHandler,
} = require('../controllers/users')

const express = require('express')
const router = express.Router()

router.get('/', getUsersHandler)
router.post('/', postUsersHandler)
router.get('/:userId', getSingleUserHandler)

module.exports = router
