const express = require('express')
const app = express()
const port = 3000

app.use('/home', require('./api/routes/homeRoutes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
