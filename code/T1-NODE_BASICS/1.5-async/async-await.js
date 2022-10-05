
async function leerResponse() {

    try {

        let response = await fetch("https://api.github.com/users/codigofacilito");
        let json = await response.json()
        console.log(json)

    } catch (err) {
        console.log('errorrrrrrrrrrrrrrr');
        console.log(err);
    }
}


leerResponse();