const express = require('express')
const cors = require('cors')
const flashCardRoutes = require('./routes/flashcardRoutes')
const AiRoutes = require('./routes/promptRoutes')

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/flashcards', flashCardRoutes)
app.use('/api/generate-cards', AiRoutes)

module.exports = app
