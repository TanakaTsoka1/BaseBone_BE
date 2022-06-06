const express = require('express')
const router = express.Router()

router.use('/categories', require('./categories'))
router.use('/localeschema', require('./localeSchema'))
router.use('/locksmodel', require('./locksModel'))
router.use('/localeschema', require('./localeSchema'))
router.use('/settingschema', require('./settingsSchema'))

router.get('/health', (req, res) => res.sendStatus(200))

module.exports = router