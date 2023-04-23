const homeController = require('./homeController')
const authController = require('./authController')
const chuckController = require('./chuckController')

module.exports = {
    ...homeController,
    ...authController,
    ...chuckController,
}
