const router = require('express').Router()
const { 
    addTown, 
    getAllTowns, 
    getSingleTown, 
    deleteTown, 
    updateTown 
} = require('../services/town.service')

router.post('/', async (req, res, next) => {
    try {
        const { city_id, town_title, town_desc } = req.body

        const payload = { city_id, town_title, town_desc }
        const town = await addTown(payload)
        res.json({ message: "Town added successfully", data: town })
    } catch (err) {
        next(err)
    }
})

// get all Towns
router.get('/', async (req, res, next) => {
    try {
        const { city } = req.query

        const towns = await getAllTowns(city)
        res.json({ message: "Towns retrieved successfully", data: towns })
    } catch (err) {
        next(err)
    }
})

// get single Town
router.get('/:town_id', async (req, res, next) => {
    try {
        const { town_id } = req.params

        const town = await getSingleTown(town_id)
        res.json({ message: "Town retrieved successfully", data: town })
    } catch (err) {
        next(err)
    }
})

// update Town
router.put('/:town_id', async (req, res, next) => {
    try {
        const { town_id } = req.params
        const { city_id, town_title, town_desc } = req.body

        const payload = { city_id, town_title, town_desc }
        await updateTown(town_id, payload)
        res.json({ message: "Town Update successful" })
    } catch (err) {
        next(err)
    }
})

// delete region
router.delete('/:town_id', async (req, res, next) => {
    try {
        const { town_id } = req.params

        await deleteTown(town_id)
        res.json({ message: "Town deleted Successfully" })
    } catch (err) {
        next(err)
    }
})

module.exports = router
