const moment = require('moment')

let ahora = moment();

console.log(ahora.toString());

// como formatear la fecha
console.log(ahora.format('DD/MM/yyyy - HH:mm'));

// startOf() cuanto tiempo ha pasado desde la hora en la q estamos es decir los  MINUTOS 
console.log(ahora.startOf('hour').fromNow());
// startOf() cuanto tiempo ha pasado desde el inicio del día es decir la Hora actual.
console.log(ahora.startOf('day').fromNow());

// endtOf() cuanto tiempo falta para finalizar el día
console.log(ahora.endOf('day').fromNow());

// calendar 
console.log(ahora.subtract(10, 'days').calendar(null, { sameElse: 'LLLL' }));
console.log(ahora.subtract(3, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.subtract(1, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.add(1, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.add(3, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));
console.log(ahora.add(10, 'days').calendar(null, { sameElse: 'DD/MM/YYYY' }));

// multiple locale support

console.log(moment.locale());// en
;         // en
moment().format('LT');   // 7:17 PM
moment().format('LTS');  // 7:17:56 PM
moment().format('L');    // 06/04/2022
moment().format('l');    // 6/4/2022
moment().format('LL');   // June 4, 2022
moment().format('ll');   // Jun 4, 2022
moment().format('LLL');  // June 4, 2022 7:17 PM
moment().format('lll');  // Jun 4, 2022 7:17 PM
moment().format('LLLL'); // Saturday, June 4, 2022 7:17 PM
moment().format('llll'); // // Sat, Jun 4, 2022 7:24 PM
