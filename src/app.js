const express = require('express')
const helmet = require("helmet");
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json());
app.use(helmet());
app.use(cors())

app.use('/home', require('./api/routes/homeRoutes'))
app.use('/login', require('./api/routes/authRoutes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
