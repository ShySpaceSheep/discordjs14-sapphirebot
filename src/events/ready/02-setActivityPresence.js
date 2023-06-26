const { ActivityType } = require('discord.js');

module.exports = (client) => {
    console.log(`\u001b[1;33m[TASK] Setting up Sapphire's Discord Presence...`, `\u001b[0m`);
    try {
        client.user.setPresence({ activities: [{ name: `you sleep...`, type: ActivityType.Watching }] });
    } catch (error) {
        console.log(`\u001b[1;31m[ERROR] Could not set Discord Presence due to: ${error}`, `\u001b[0m`);
    }
};