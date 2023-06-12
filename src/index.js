const { Client, IntentsBitField } = require('discord.js');
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
        console.log(`${ c.user.username } has succesfully initialized is now online!`);
    } catch (error) {
        console.log(`${ c.user.username } has failed to initialized due to an error.`)
    }
});

client.login(config.token);

