const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const authController = require('../controllers/authController')
const { verifyToken } = require('../middlewares/auth')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', verifyToken, authController.getUser)

module.exports = router