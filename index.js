const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// body parser setup
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// DB setup
const initDB = require('./db')
initDB();

// Routes setup
const routes = require('./routes/v1.routes')
app.use('/api/v1',routes)


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))