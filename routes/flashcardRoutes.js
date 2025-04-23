const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const flashCardController = require('../controllers/flashCardController')
const addFlashCardValidation = require('../valildations/flashCardValidator')
const { verifyToken } = require('../middlewares/auth')

router.use(bodyParser.urlencoded({ extended: true }))

router.get('/retrieve', verifyToken, flashCardController.getFlashCards)
router.get('/user-cards', verifyToken, flashCardController.getCardsByUser)
router.post('/get-by-prompt', verifyToken, flashCardController.getByPrompt)
router.post('/', verifyToken, addFlashCardValidation, flashCardController.createFlashCard)

module.exports = router