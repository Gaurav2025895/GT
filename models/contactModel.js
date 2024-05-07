// models/contactModel.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    concernDescription: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;