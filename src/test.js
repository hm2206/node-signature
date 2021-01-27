const Signer = require('./Signer');
const path = require('path');
const fs = require('fs');

let pfx = path.join(__dirname, "texas.pfx");
let pdf = path.join(__dirname, "example.pdf");
let salida = path.join(__dirname, "signature_example.pdf");

Signer(pfx, "joserogelio", pdf, salida, {
        position: 39,
        page: 2
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));