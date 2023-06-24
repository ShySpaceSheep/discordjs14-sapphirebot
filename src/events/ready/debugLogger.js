const { ActivityType } = require('discord.js');

module.exports = (client) => {
    try {
        client.user.setPresence({ activities: [{ name: `you sleep...`, type: ActivityType.Watching }] });
        console.log(`\u001b[1;32m[STATUS] ${client.user.tag } has succesfully initialized and is now online!`, "\u001b[0m");
    } catch (error) {
        console.log(`\u001b[1;31m[ERROR] ${client.user.tag } has failed to initialized due to ${error}`, "\u001b[0m")
    }
};