const City = require('../models').models.City


const addCity = async payload => {
    return await City.create(payload)
}

const getAllCities = async region_id => {
    const cities = await City.findAll({ where: { region_id } })

    if (cities.length < 1) throw new Error('No Cities found')

    return cities
}

const getSingleCity = async city_id => {
    return await City.findByPk(city_id)
}

const updateCity = async (city_id, payload) => {
    return await City.update(payload, { where: { id: city_id } })
}

const deleteCity = async city_id => {
    return await City.destroy({ where: { id: city_id } })
}

module.exports = { addCity, getAllCities, getSingleCity, deleteCity, updateCity }