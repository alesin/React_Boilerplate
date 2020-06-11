const router = require('express').Router()
const passport = require('passport')
const {User} = require('../db')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

module.exports = router

// *** Google authentication and login (GET /auth/google)
router.get('/', passport.authenticate('google', {scope: 'email'}))

