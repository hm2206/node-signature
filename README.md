# Firmador de PDF con node.js


#### Configurar Hoja Cliente

```
    A0 => 2387 x 3370 (72pt)
    A1 => 2387 x 3370 (72pt)
    A2 => 1191 x 1684 (72)
    A3 => 842 x 1191 (72pt)
    A4 => 595 x 842 (72pt)
    
```


#### medidas del rectagulo de la firma visible

```
    Width = 108
    Height = 32

```


### ejemplo


```js

const Signer = require('./Signer');
const path = require('path');
const fs = require('fs');

let pfx = path.join(__dirname, "apples.pfx");
let pdf = path.join(__dirname, "example.pdf");
let salida = path.join(__dirname, "signature_example.pdf");

Signer(pfx, "apples", pdf, salida)
    .then(res => console.log(res))
    .catch(err => console.log(err));

```


```
#Output Success => {
    realPath: <ruta real pdf salida>
    message: "El pdf se firmó correctamente!"
} 

#Outout Error => Error: <message>
```