const Router = require('express')
const router = new Router()
const backgroundRouter = require('./backgroundRouter')
const formRouter = require('./formRouter')

router.use('/background', backgroundRouter)
router.use('/form', formRouter)

module.exports = router