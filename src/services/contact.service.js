const Contact = require('../models').models.Contact


const addContact = async payload => {
    return await Contact.create(payload)
}

const getAllContacts = async () => {
    const Contacts = await Contact.findAll()

    if (Contacts.length < 1) throw new Error('No Contacts found')

    return Contacts
}

const getSingleContact = async contact_id => {
    return await Contact.findByPk(contact_id)
}

const updateContact = async (contact_id, payload) => {
    return await Contact.update(payload, { where: { id: contact_id } })
}

const deleteContact = async contact_id => {
    return await Contact.destroy({ where: { id: contact_id } })
}

module.exports = { addContact, getAllContacts, getSingleContact, deleteContact, updateContact }