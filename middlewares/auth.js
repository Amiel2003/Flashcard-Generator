const { admin } = require('../firebase/firebase')

const verifyToken = async (req, res, next) => {
    const header = req.headers.authorization

    if (!header || !header.startsWith('Bearer ')) {
        console.log("No token found!")
    }

    const accessToken = header.split('Bearer ')[1]

    try {
        const decode = await admin.auth().verifyIdToken(accessToken)
        req.user = decode // User info ni siya
        console.log("Token is valid! Continuing...")
        next()
    } catch (error) {
        console.log("Token is Invalid!")
        return res.status(401).json({ message: "Invalid or expired token", error });
    }
}

module.exports = { verifyToken }