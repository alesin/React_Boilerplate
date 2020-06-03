const express = require('express')
const app = express()
const morgan = require('morgan');  // *** LOGGING middleware

app.use(morgan('dev'))   // *** LOGGING middleware

