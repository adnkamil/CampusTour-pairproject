const route = require('express').Router()
const TourControl = require('../controllers/tourControl')

route.get('/', TourControl.show)
route.get('/addTour', TourControl.addTour)
route.post('/addTour', TourControl.addPost)

module.exports = route