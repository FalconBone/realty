const Router = require('express')
const router = new Router()
const backgroundController = require('../controllers/backgroundController')

router.post('/set', backgroundController.setBackground)

module.exports = router