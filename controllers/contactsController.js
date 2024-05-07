// controllers/contactsController.js

const Contact = require('../models/contactModel');

// Get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new contact
exports.createContact = async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        whatsappNumber: req.body.whatsappNumber,
        email: req.body.email,
        concernDescription: req.body.concernDescription
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a contact
exports.updateContact = async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
