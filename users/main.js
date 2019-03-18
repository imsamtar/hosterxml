const mongoose = require('mongoose')
const checkAuth = require('./middlewares/check-auth')
const router = require('express').Router()

mongoose.connect('mongodb://localhost/hosterxml', { useNewUrlParser: true, useCreateIndex: true })

router.get('/', require('./controllers/get-users'))
router.post('/signup', require('./controllers/add-user'))
router.post('/login', require('./controllers/auth-user'))
router.put('/', checkAuth, require('./controllers/edit-user'))
router.delete('/', checkAuth, require('./controllers/delete-user'))

module.exports = router
