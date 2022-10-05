// function asincrona(cb) {
//     setTimeout(() => {

//         try {
//             let a = 3 + z
//             cb(null, a)
//         } catch (e) {
//             cb(e, null)
//         }

//     }, 1000);
// }

// asincrona((err, dato) => {
//     if (err) {
//         console.log('tenemos error');
//         console.log(err);
//         return false
//     }

//     console.log('todo bien ', dato);
// })

function asincrona(cb) {
    setTimeout(() => {

        try {
            let a = 3 + z
            cb(null, a)
        } catch (e) {
            cb(e, null)
        }

    }, 1000);
}

try {

    asincrona((err, dato) => {
        if (err) {

            throw err; // ESTO NO FUNCIONA
        }

        console.log('todo bien ', dato);
    })


} catch (e) {
    console.err('hay un error');
    console.err(e);
}
