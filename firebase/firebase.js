require('dotenv').config()
const admin = require('firebase-admin')

// Decode base64-encoded service account
const serviceAccount = JSON.parse(
    Buffer.from(process.env.FIREBASE_SERVICEACCOUNT_BASE64, 'base64').toString('utf8')
);

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.FIREBASE_URL,
    });
}

const db = admin.database()

module.exports = {
    db, admin
}