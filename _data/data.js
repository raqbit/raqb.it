const fs = require('fs');

const options = {
    logo: fs.readFileSync('assets/img/cactus_icon.svg'),
    now: new Date(),
};

module.exports = options;
