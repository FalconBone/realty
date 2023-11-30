const Router = require('express')
const router = new Router()
const formController = require('../controllers/formController')

router.post('/getOne', formController.getFormData);
router.get('/getAll', formController.getForms);
router.post('/add', formController.addFormData);
router.post('/delete', formController.deleteFormById);
router.post('/update', formController.updateFormById)

module.exports = router