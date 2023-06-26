const path = require('path');
const retrieveFiles = require('./retrieveFiles');

module.exports = (exception) => {
    let localCommands = [];
    const commandTypes = retrieveFiles(path.join(__dirname, '..', 'commands'), true);

    for (const commandType of commandTypes) {
        const commandSrcs = retrieveFiles(commandType);
        for (const cmdSrc of commandSrcs) {
            const cmdObject = require(cmdSrc);
            localCommands.push(cmdObject);
        }
    }
    return localCommands;
};