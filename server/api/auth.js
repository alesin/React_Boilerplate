const router = require('express').Router()
const {User} = require('../db')
module.exports = router

router.put('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user) {
            res.status(401).send('User not found.')
        }
        else if (!user.checkPassword(req.body.password)) {
            res.status(401).send('Incorrect password.')
        }
        else {
            // *** connect user to passport middleware
            // *** http://www.passportjs.org/docs/login/
            req.login(user, (error) => error ? next(error) : res.json(user))
        }
    } catch (error) {
        next(error)
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch (error) {
        next(error)
    }
})

router.delete('/logout', (req, res) => {
    // *** PASSPORT middleware
    // *** http://www.passportjs.org/docs/logout/
    req.logout()
    // *** SESSION middleware: DELETE whole session
  // *** https://www.npmjs.com/package/express-session#sessiondestroycallback
    req.session.destroy((error) => {
        if (error) return next(error)
        res.sendStatus(204)
    })
})
