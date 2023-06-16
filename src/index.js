const { Client, IntentsBitField, ActivityType } = require('discord.js');
const config = require('./config.json');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    try {
        console.log(`${ c.user.tag } has succesfully initialized is now online!`);
        c.user.setPresence({ activities: [{ name: `Oshi no Ko Episode 9`, type: ActivityType.Watching }] });
    } catch (error) {
        console.log(`${ c.user.tag } has failed to initialized due to an error.`)
    }
});

client.login(config.token);

