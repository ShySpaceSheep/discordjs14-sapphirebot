const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const config = require('./config.json');

const commands = [
    { name: 'profile', description: 'Display a detailed view of your server profile statistics.' }
];

const rest = new REST({version: '10'}).setToken(config.token);

(async () => {
    try {
        console.log("\u001b[1;33m[STATUS] Registering all available slash commands...", "\u001b[0m");
        await rest.put(
            Routes.applicationGuildCommands(config.clientID, config.homeGuildID),
            { body: commands }
        );
        console.log("\u001b[1;32m[STATUS] Success!", "\u001b[0m");
    } catch (error) {
        console.log(`\u001b[1;31m[STATUS] Runtime error encountered: ${error}...`, "\u001b[0m");
    }
})();