const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

//connect to mongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
        app.listen(port, () => {console.log(`Server is running on port: ${port}`)});
    })
.catch(err => console.log(err));
