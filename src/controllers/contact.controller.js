const router = require('express').Router()
const { 
    addContact, 
    getAllContacts, 
    getSingleContact, 
    deleteContact, 
    updateContact 
} = require('../services/contact.service')

router.post('/', async (req, res, next) => {
    try {
        const { town_id, first_name, last_name, email, phone } = req.body

        const payload = { town_id, first_name, last_name, email, phone }
        const contact = await addContact(payload)
        res.json({ message: "Contact added successfully", data: contact })
    } catch (err) {
        next(err)
    }
})

// get all Contacts
router.get('/', async (req, res, next) => {
    try {
        const contacts = await getAllContacts()
        res.json({ message: "Contacts retrieved successfully", data: contacts })
    } catch (err) {
        next(err)
    }
})

// get single Contact
router.get('/:contact_id', async (req, res, next) => {
    try {
        const { contact_id } = req.params

        const contact = await getSingleContact(contact_id)
        res.json({ message: "Contact retrieved successfully", data: contact })
    } catch (err) {
        next(err)
    }
})

// update Contact
router.put('/:contact_id', async (req, res, next) => {
    try {
        const { contact_id } = req.params
        const { town_id, first_name, last_name, email, phone } = req.body

        const payload = { town_id, first_name, last_name, email, phone }
        await updateContact(contact_id, payload)
        res.json({ message: "Contact Update successful" })
    } catch (err) {
        next(err)
    }
})

// delete region
router.delete('/:contact_id', async (req, res, next) => {
    try {
        const { contact_id } = req.params

        await deleteContact(contact_id)
        res.json({ message: "Contact deleted Successfully" })
    } catch (err) {
        next(err)
    }
})

module.exports = router
