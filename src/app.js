const express = require('express')
const helmet = require("helmet");
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(cors())

app.use('/home', require('./api/routes/homeRoutes'))
app.use('/login', require('./api/routes/authRoutes'))
app.use('/blog', require('./api/routes/blogRoutes'))

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/.`)
})
