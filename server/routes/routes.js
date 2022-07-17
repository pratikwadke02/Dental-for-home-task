module.exports = app => {
    const article = require('../controllers/article.controller.js');

    const router = require('express').Router();

    router.post("/", article.create);
    router.get("/", article.findAll);

    app.use('/api/articles', router);
};