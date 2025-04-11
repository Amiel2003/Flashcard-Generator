const express = require('express')
const cors = require('cors')
const flashCardRoutes = require('./routes/flashcardRoutes')
const AiRoutes = require('./routes/AiRoutes')

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/flashcards', flashCardRoutes)
app.use('/api/generate-cards', AiRoutes)

module.exports = app
