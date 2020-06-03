'use strict'

const app = require('./server')

// *** very useful setup for deployment on Heroku!
const port = process.env.PORT || 3040

app.listen(port, () => {
  console.log("Knock, knock")
  console.log("Who's there?")
  console.log(`Your server, listening on port ${port}`)
})
