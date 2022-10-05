function addMessage(user, message) {

    return new Promise((res, rej) => {

        if (!user || !message) {

            rej('los datos son incorrectos')
        } else {
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            }

            res(fullMessage)
        }
    })


}



module.exports = {
    addMessage
}