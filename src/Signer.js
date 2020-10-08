const { execSync } = require('child_process');
const path = require('path');

const defaultOptions = {
    visible: true,
    page: 1,
    position: 0,
    reason: "Soy_el_firmante",
    location: "CCFFigueroa",
    urlImage: path.join(__dirname, 'logo.png')
};

const Signer = (pfx, passPfx, source = "", target = "", options = defaultOptions) => {
    return new Promise((resolve, reject) => {
        try {
            let config = Object.assign(defaultOptions, options);
            config.reason = config.reason.replace(/[\s]+/g, "_");
            config.location = config.location.replace(/[\s]+/g, "_");
            let jar = path.join(__dirname, '../dist/Signature.jar');
            let command = `java -jar "${jar}" "PFX=${pfx};PASSPFX=${passPfx};SOURCE=${source};TARGET=${target}"`;
            // generar comando
            for(let conf in config) {
                command += `;${conf.toUpperCase()}=${config[conf]}`;
            }
            // executar comando
            execSync(command);
            // resolver
            resolve({
                realPath: target,
                message: "El pdf se firmó correctamente!"
            });
        } catch (error) {
            reject(error.message);
        }
    });
}

module.exports = Signer; 