const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan');  // *** LOGGING middleware

app.use(morgan('dev'))   // *** LOGGING middleware
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))  // *** Customize MORGAN logging

// *** BODY PARSING middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// *** STATIC middleware
app.use(express.static(path.join(__dirname, '../public')))

// *** connect ROUTES ==> mounted on /api
app.use('/api', require('./api'))

// *** serve up index.HTML for all requests that do not match API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
