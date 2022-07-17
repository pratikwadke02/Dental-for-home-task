const db = require('../models');
const Article = db.article;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Save article in database
    Article.create({
        title: req.body.title,
        image: req.body.image,
        date: req.body.date,
        time: req.body.time
    }).then(article => {
        res.send(article);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Article."
        });
    });
}

exports.findAll = (req, res) => {
    // Retrieve all articles from database
    Article.findAll({}).then(articles => {
        res.send(articles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving articles."
        });
    });
}