const express = require('express')
const app = express()
const morgan = require('morgan');  // *** LOGGING middleware

app.use(morgan('dev'))   // *** LOGGING middleware
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))  // *** Customize MORGAN logging

// *** BODY PARSING middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// *** STATIC middleware
app.use(express.static(path.join(__dirname, '../public')))
