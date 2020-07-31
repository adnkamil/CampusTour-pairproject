const { Tour, Participant, TourParticipant, University } = require('../models')

class ParticipantControl {
    static show(req, res) {
        Participant.findAll({
            include: [Tour]
        })
            .then(data => {
                res.render('participants', {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addTourParticipant(req, res) {
        let participant = null
        Participant.findByPk(req.params.id)
            .then(data => {
                participant = data
                return Tour.findAll({
                    include: [University]
                })
            }).then(tour => {
                res.render('add-tour', {participant, tour})
            })
    }

    static addPostTP(req,res) {
        TourParticipant.create({
            ParticipantId: req.params.id,
            TourId: req.body.TourId
        })
            .then(data => {
                res.redirect('/participants')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addParticipant(req,res) {
        res.render('add-participant')
    }

    static addPost(req, res) {
        let obj = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password
        }
        Participant.create(obj)
            .then(data => {
                res.redirect('/participants')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ParticipantControl