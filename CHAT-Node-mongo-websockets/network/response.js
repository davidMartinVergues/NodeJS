module.exports.success = function (req, res, message, statusCode) {


    res.status(statusCode || 200).send({
        error: '',
        body: message
    })

}

module.exports.error = function (req, res, message, statusCode) {

    res.status(statusCode || 500).send({
        error: message,
        body: ''
    })


};

