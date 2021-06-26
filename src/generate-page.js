const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error log an error
            if (err) {
                reject(err);
                return;
            }

            // If everything went well, resolve the promise
            resolve(`
╔═╗╦ ╦╔═╗╔═╗╔═╗╔═╗╔═╗┬
╚═╗║ ║║  ║  ║╣ ╚═╗╚═╗│
╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝o
An index.html has been successfully generated. Please check the dist folder for the output!`
            );
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve(
                "A CSS stylesheet has successfully copied! Please check the dist folder for the output!"
            );
        });
    });
};

module.exports = { writeFile, copyFile };