const router = require('express').Router()
const { 
    addCity, 
    getAllCities, 
    getSingleCity, 
    deleteCity, 
    updateCity 
} = require('../services/city.service')

router.post('/', async (req, res, next) => {
    try {
        const { region_id, city_title, city_desc } = req.body

        const payload = { region_id, city_title, city_desc }
        const city = await addCity(payload)
        res.json({ message: "City added successfully", data: city })
    } catch (err) {
        next(err)
    }
})

// get all cities
router.get('/', async (req, res, next) => {
    try {
        const { region } = req.query

        const cities = await getAllCities(region)
        res.json({ message: "Cities retrieved successfully", data: cities })
    } catch (err) {
        next(err)
    }
})

// get single city
router.get('/:city_id', async (req, res, next) => {
    try {
        const { city_id } = req.params

        const city = await getSingleCity(city_id)
        res.json({ message: "City retrieved successfully", data: city })
    } catch (err) {
        next(err)
    }
})

// update city
router.put('/:city_id', async (req, res, next) => {
    try {
        const { city_id } = req.params
        const { region_id, city_title, city_desc } = req.body

        const payload = { region_id, city_title, city_desc }
        await updateCity(city_id, payload)
        res.json({ message: "City Update successful" })
    } catch (err) {
        next(err)
    }
})

// delete region
router.delete('/:city_id', async (req, res, next) => {
    try {
        const { city_id } = req.params

        await deleteCity(city_id)
        res.json({ message: "City deleted Successfully" })
    } catch (err) {
        next(err)
    }
})

module.exports = router
