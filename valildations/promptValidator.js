const { body, validationResult } = require('express-validator')

const promptValidation = [
    body('prompt').trim().notEmpty().withMessage("Prompt is required"),
    body('number').trim().notEmpty().withMessage("Number is required"),
    body('difficulty').trim().notEmpty().withMessage("Difficulty is required"),

    // Check for validation errors
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({ error: errors.array() })
        }
        next()
    }
]

module.exports = promptValidation;