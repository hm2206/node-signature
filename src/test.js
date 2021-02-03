const { Signer } = require('./index');
const { getPositions } = require('../client/index');
const path = require('path');

let pfx = path.join(__dirname, "texas.pfx");
let pdf = path.join(__dirname, "example.pdf");
let salida = path.join(__dirname, "signature_example.pdf");

const test1 = () => {
    Signer(pfx, "joserogelio", pdf, salida, {
        position: 39,
        page: 2
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}


const test2 = () => {
    Signer(pfx, "joserogelio", pdf, salida, {
        position: 32,
        page: 1,
        location: ""
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

// test1();
test2();