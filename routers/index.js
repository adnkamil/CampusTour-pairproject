const route = require('express').Router()
const univRoute = require('./univRoute')
const tourRoute = require('./tourRoute')
const participantRoute = require('./participantRoute')

route.get('/', (req, res) => {
    res.send('masuk routersss')
})

route.use('/universities', univRoute)
route.use('/tours', tourRoute)
route.use('/participants', participantRoute)

module.exports = route
