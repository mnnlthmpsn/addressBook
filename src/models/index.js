const { Sequelize } = require('sequelize')

const getRegionModel = require('./region.model')
const getCityModel = require('./city.model')
const getTownModel = require('./town.model')
const getContactModel = require('./contact.model')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
)

const models = {
    Region: getRegionModel(sequelize, Sequelize),
    City: getCityModel(sequelize, Sequelize),
    Town: getTownModel(sequelize, Sequelize),
    Contact: getContactModel(sequelize, Sequelize)
}

module.exports = { models, sequelize }