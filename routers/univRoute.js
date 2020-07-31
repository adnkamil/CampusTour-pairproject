const route = require('express').Router()
const UnivControl = require('../controllers/univControl')

route.get('/', UnivControl.show)
route.get('/addUniversity', UnivControl.addUniversity)
route.post('/addUniversity', UnivControl.addPost)
route.get('/:id/listTour', UnivControl.listTour)

module.exports = route