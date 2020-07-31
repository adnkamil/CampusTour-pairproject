const { University, Tour } = require('../models')
const getDate = require('../helper/getDate')

class UnivControl {
    static show(req, res) {
        University.findAll()
            .then(data => {
                res.render('university', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addUniversity(req, res) {
        res.render('add-university')
    }

    static addPost(req, res) {
        let obj = {
            campus: req.body.campus,
            address: req.body.address
        }
        University.create(obj)
            .then(data => {
                res.redirect('/universities')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static listTour(req,res) {
        Tour.findAll({
            include: [University],
            where: {
                UniversityId: +req.params.id
            }
        })
            .then(data => {
                res.render('tours', {data, getDate})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = UnivControl