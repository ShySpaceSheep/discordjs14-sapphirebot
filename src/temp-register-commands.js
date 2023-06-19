const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const config = require('./config.json');

const commands = [
    { name: 'pekoify', description: 'Append Pekora\'s \"peko\" to a message!' },
    { name: 'now', description: 'Retrieve the current date and time.'},
    { name: 'me', description: 'Show the user their public Discord information.' },
    { 
        name: 'add',
        description: 'Adds two numbers provided by the user',
        options: [
            {
                name: 'first_number',
                description: 'The base number of the equation.',
                type: ApplicationCommandOptionType.Number,
                required: true
            }, 
            {
                name: 'second_number',
                description: 'The number that\'s added to the base number.',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
    {
        name: 'helloworld',
        description: 'Writes the equivalent hello world source code of the chosen programming language',
        options: [
            {
                name: 'programming_language',
                description: 'The name of the programming language we want to write in.',
                type: ApplicationCommandOptionType.Number,
                required: true,
                choices: [
                    { name: 'C', value: 1 },
                    { name: 'C++', value: 2 },
                    { name: 'Java', value: 3 },
                    { name: 'Javascript', value: 4 },
                    { name: 'Python', value: 5 }
                ]
            }
        ]
    }
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