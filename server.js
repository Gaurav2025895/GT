// server.js
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes hello 
app.use('/contacts', contactsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
