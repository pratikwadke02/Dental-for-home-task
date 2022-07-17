module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define('article', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        // image: {
        //     type: Sequelize.image,
        //     allowNull: false
        // },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        time: {
            type: Sequelize.TIME,
            allowNull: false
        }
    });
    return Article;
}