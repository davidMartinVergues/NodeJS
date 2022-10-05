
const message = require('../components/message/network')

const routes = function (app) {

    app.use('/message', message) // marca la url, todas las url q empiezan por /message las gestionará el archivo network de message

}

module.exports = routes