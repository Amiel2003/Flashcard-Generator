const app = require('./app')
const port = 5000
const listEndPoints = require('express-list-endpoints')


console.log(listEndPoints(app))
app.listen(port, () => {
    console.log(`Server listening in PORT ${port}`)
})