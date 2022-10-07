const router = require('express').Router()
const { 
    addRegion, 
    getAllRegions, 
    getSingleRegion, 
    deleteRegion, 
    updateRegion 
} = require('../services/region.service')

router.post('/', async (req, res, next) => {
    try {
        const { region_title, region_desc } = req.body

        const payload = { region_title, region_desc }
        const region = await addRegion(payload)
        res.json({ message: "Region added successfully", data: region })
    } catch (err) {
        next(err)
    }
})

// get all regions
router.get('/', async (req, res, next) => {
    try {
        const regions = await getAllRegions()
        res.json({ message: "Regions retrieved successfully", data: regions })
    } catch (err) {
        next(err)
    }
})

// get single region
router.get('/:region_id', async (req, res, next) => {
    try {
        const { region_id } = req.params

        const region = await getSingleRegion(region_id)
        res.json({ message: "Region retrieved successfully", data: region })
    } catch (err) {
        next(err)
    }
})

// update region
router.put('/:region_id', async (req, res, next) => {
    try {
        const { region_id } = req.params
        const { region_title, region_desc } = req.body

        const payload = { region_title, region_desc }
        await updateRegion(region_id, payload)
        res.json({ message: "Region Update successful" })
    } catch (err) {
        next(err)
    }
})

// delete region
router.delete('/:region_id', async (req, res, next) => {
    try {
        const { region_id } = req.params

        await deleteRegion(region_id)
        res.json({ message: "Region deleted Successfully" })
    } catch (err) {
        next(err)
    }
})

module.exports = router
