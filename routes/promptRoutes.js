const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const promptController = require('../controllers/promptController')
const promptValidation = require('../valildations/promptValidator')

router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', promptValidation, promptController.sendPrompt)

module.exports = router