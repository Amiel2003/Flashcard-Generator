const admin = require('firebase-admin')
const serviceAccount = require('./firebase.json')

// set up credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://moneycache-buksu-default-rtdb.firebaseio.com/"
})

const db = admin.database()

module.exports = db