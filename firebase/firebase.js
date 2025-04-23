require('dotenv').config()
const admin = require('firebase-admin')
const serviceAccount = require('./firebase.json')

// set up credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_URL
})

const db = admin.database()

module.exports = {
    db, admin
}