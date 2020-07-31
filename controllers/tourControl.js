const { Tour, University } = require('../models')
const getDate = require('../helper/getDate')

class TourControl {
    static show(req, res) {
        Tour.findAll({
            include: [University]
        })
            .then(data => {
                res.render('tours', {data, getDate})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addTour(req, res) {
        University.findAll()
            .then(data => {
                res.render('add-listtour', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addPost(req,res) {
        let obj = {
            name_tour: req.body.name_tour,
            UniversityId: req.body.university,
            date: req.body.date
        }
        Tour.create(obj)
            .then(data => {
                res.redirect('/tours')
            })
            .catch(err => {
                console.log(err);

                res.send(err)
            })
    }
}

module.exports = TourControl