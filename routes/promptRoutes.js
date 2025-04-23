const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const promptController = require('../controllers/promptController')
const promptValidation = require('../valildations/promptValidator')
const { verifyToken } = require('../middlewares/auth')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', verifyToken, promptValidation, promptController.sendPrompt)
router.get('/', verifyToken, promptController.verify)

module.exports = router