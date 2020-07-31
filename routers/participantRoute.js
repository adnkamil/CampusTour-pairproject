const route = require('express').Router()
const ParticipantControl = require('../controllers/participantControl')

route.get('/', ParticipantControl.show)
route.get('/:id/tour', ParticipantControl.addTourParticipant)
route.post('/:id/tour', ParticipantControl.addPostTP)

route.get('/addParticipant', ParticipantControl.addParticipant)
route.post('/addparticipant', ParticipantControl.addPost)

module.exports = route