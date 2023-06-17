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
        c.user.setPresence({ activities: [{ name: `you sleep...`, type: ActivityType.Watching }] });
        console.log(`\u001b[1;32m[STATUS] ${ c.user.tag } has succesfully initialized and is now online!`, "\u001b[0m");
    } catch (error) {
        console.log(`\u001b[1;31m[ERROR] ${ c.user.tag } has failed to initialized due to ${error}`, "\u001b[0m")
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) { return; }
    const cmd = interaction.commandName;

    if (cmd === 'pekoify') {
        interaction.reply("Konpeko konpeko konpeko! Hololive sankisen no Usadaaaa Pekora-peko!");
    } else if (cmd === 'now') {
        const currentTimestamp = new Date();
        interaction.reply(currentTimestamp.toString());
    } else if (cmd === 'add') {
        const num1 = interaction.options.get('first_number').value;
        const num2 = interaction.options.get('second_number').value;

        interaction.reply(`I was given the numbers ${num1} and ${num2}, therefore, their sum would be ${num1 + num2}!`);
    }
});

client.login(config.token);

