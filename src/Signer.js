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

const required = ['page', 'position'];

const Signer = (pfx, passPfx, source = "", target = "", options = defaultOptions) => {

    options = Object.assign(defaultOptions, options);

    return new Promise((resolve, reject) => {
        try {
            let config = Object.assign(defaultOptions, options);
            config.reason = config.reason.replace(/[\s]+/g, "_");
            config.location = config.location.replace(/[\s]+/g, "_");
            let jar = path.join(__dirname, '../dist/Signature.jar');
            let paramsOption = "";
            let command = `java -jar "${jar}" "${pfx}" "${passPfx}" "${source}" "${target}" `;
            // generar comando
            for(let conf in config) {
                let value = config[conf];
                if (!required.includes(conf) && value) paramsOption += `${conf.toUpperCase()}=${config[conf]};`;
                if (required.includes(conf)) paramsOption += `${conf.toUpperCase()}=${config[conf]};`;
            }
            // agregar options
            command += `"${paramsOption}"`
            // executar comando
            execSync(command);
            // resolver
            resolve({
                options,
                realPath: target,
                message: "El pdf se firmó correctamente!"
            });
        } catch (error) {
            reject(error.message);
        }
    });
}

module.exports = Signer; 