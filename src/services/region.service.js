const Region = require('../models').models.Region


const addRegion = async payload => {
    return await Region.create(payload)
}

const getAllRegions = async () => {
    const regions = await Region.findAll()

    if (regions.length < 1) throw new Error('No regions found')

    return regions
}

const getSingleRegion = async region_id => {
    return await Region.findByPk(region_id)
}

const updateRegion = async (region_id, payload) => {
    return await Region.update(payload, { where: { id: region_id } })
}

const deleteRegion = async region_id => {
    return await Region.destroy({ where: { id: region_id } })
}

module.exports = { addRegion, getAllRegions, getSingleRegion, deleteRegion, updateRegion }