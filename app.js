const dotenv = require('dotenv');
const mongoose = require('mongoose');

// const { DB_HOST } = process.env;
// const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/api/contacts');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);
module.exports = app;
