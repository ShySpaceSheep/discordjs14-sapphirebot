const path = require('path');
const retrieveFiles = require('../utils/retrieveFiles');

module.exports = (client) => {
    const eventFolders = retrieveFiles(path.join(__dirname, '..', 'events'), true);
    for (const eventFolder of eventFolders) {
        const eventFiles = retrieveFiles(eventFolder);
        eventFiles.sort((a, b) => a > b);
        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();

        client.on(eventName, async (arg) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }
        });
    }
};