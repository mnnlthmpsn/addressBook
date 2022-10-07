const Town = require('../models').models.Town


const addTown = async payload => {
    return await Town.create(payload)
}

const getAllTowns = async city_id => {
    const Towns = await Town.findAll({ where: { city_id } })

    if (Towns.length < 1) throw new Error('No Towns found')

    return Towns
}

const getSingleTown = async town_id => {
    return await Town.findByPk(town_id)
}

const updateTown = async (town_id, payload) => {
    return await Town.update(payload, { where: { id: town_id } })
}

const deleteTown = async town_id => {
    return await Town.destroy({ where: { id: town_id } })
}

module.exports = { addTown, getAllTowns, getSingleTown, deleteTown, updateTown }