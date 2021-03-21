const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/api');

require('dotenv').config()

const app = express();

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', err => {
    console.error(err);
});

app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

