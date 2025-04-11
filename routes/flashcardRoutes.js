const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const flashCardController = require('../controllers/flashCardController')
const addFlashCardValidation = require('../valildations/flashCardValidator')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', flashCardController.getFlashCards)
router.post('/', addFlashCardValidation, flashCardController.createFlashCard)

module.exports = router