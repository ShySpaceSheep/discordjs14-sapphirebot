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
    } else if (cmd === 'helloworld') {
        const progLangCode = interaction.options.get('programming_language').value;

        // I will change this mouthful of a string, I'll make sure of it.
        switch (progLangCode) {
            case 1:
                interaction.reply("The boilerplate written in C provided below will print out a \`\Hello World\` line in the console window.\n" +
                                "\`\`\`C\n#include <stdio.h>\n\nint main(int args, char** kwargs) {\n\tprintf(\"Hello World!\");\n\treturn 0;\n}\`\`\`" +
                                "\nTo further explain the given source code, we've included the \`stdio.h\` library to import standard I/O functions which will be relevant with our use of the \`printf()\` function to print out our \`Hello World\` line." +
                                "\n\nOur \`printf()\` is tucked away in a function called \`main()\` where our program will always execute first and foremost when we launch it. A successful runtime instance will yield an integer of 0 as indicated by the \`return 0;\` line, anything else will signify an unsuccessful termination." +
                                "\n\nThis is generally almost the same as the source code for the same task in C++ as they share many elements and syntax.");
                break;
            case 2:
                interaction.reply("The boilerplate written in C++ provided below will print out a \`\Hello World\` line in the console window.\n" +
                                "\`\`\`C++\n#include <iostream>\n\nint main(int args, char** kwargs) {\n\tstd::cout << \"Hello World!\" << std::endl;\n\treturn 0;\n}\`\`\`" +
                                "\n To further explain the given source code, we've included the \`iostream\` namespace to import standard I/O functions which contains the `cout` and `endl` functions that we'll be using to print out our \'Hello World\' line." +
                                "\n\nOur \`cout\` and \'endl\' functions are tucked away in a function called \`main()\` where our program will always execute first and foremost when we launch it. A successful runtime instance will yield an integer of 0 as indicated by the \`return 0;\` line, anything else will signify an unsuccessful termination." +
                                "\n\nThis is generally almost the same as the source code for the same task in C as they share many elements and syntax.");
                break;
            case 3:
                interaction.reply("\`\`\`Java\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello World!\");\n\t}\n}\`\`\`");
                break;
            case 4:
                interaction.reply("It is fairly simple to print out a \'Hello World\' line using Javascript using the following line of code below:\n" +
                                "\`\`\`Javascript\nconsole.log(\"Hello World!\");\`\`\`");
                break;
            case 5:
                interaction.reply("\`\`\`Python\nprint(\"Hello World!\");\`\`\`");
                break;
            default:
                break;
        }
    }
});

client.login(config.token);

