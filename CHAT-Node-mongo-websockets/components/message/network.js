
const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const path = require('path')

const controller = require('./controller')


router.get('/', (req, res) => {

    res.header({
        "custom-header": "nuestro header custom"
    })

    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    //response.success(req, res, 'Lista de mensajes');
})

router.post('/', (req, res) => {

    controller.addMessage(req.body.user, req.body.message)
        .then((data) => {

            response.success(req, res, data, 201)
        })
        .catch((err) => {
            console.error(err);
            response.error(req, res, 'error simulado', 401)
        })


})

module.exports = router