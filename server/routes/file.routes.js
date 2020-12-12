const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const fileControler = require('../controllers/fileController')

router.post('', authMiddleware, fileControler.createDir)

module.exports = router