const { body, validationResult } = require('express-validator')

const addFlashCardValidation = [
    body('question').trim().notEmpty().withMessage("Question is required"),
    body('answer').trim().notEmpty().withMessage("Answer is required"),
    body('topic').trim().notEmpty().withMessage("Topic is required"),

    // Check for validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ error: errors.array() })
        }
        next()
    }
]

module.exports = addFlashCardValidation;