const Signer = require('./Signer');
const path = require('path');
const fs = require('fs');

let pfx = path.join(__dirname, "apples.pfx");
let pdf = path.join(__dirname, "example.pdf");
let salida = path.join(__dirname, "signature_example.pdf");

Signer(pfx, "apples", pdf, salida)
    .then(res => console.log(res))
    .catch(err => console.log(err));