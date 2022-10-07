require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

const controllers = require('./src/controllers')
const { sequelize } = require('./src/models')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/region', controllers.RegionController)
app.use('/city', controllers.CityController)
app.use('/town', controllers.TownController)
app.use('/contact', controllers.ContactController)

app.use((error, req, res, next) => {
    return res.json({ message: error.message })
})

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => 'Server Started')
})