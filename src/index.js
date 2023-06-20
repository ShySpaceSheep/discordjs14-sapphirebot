const { Client, IntentsBitField, EmbedBuilder, ActivityType, Guild } = require('discord.js');
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

// TODO: Finalize available command list
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) { return; }
    const cmd = interaction.commandName;

    if (cmd === 'profile') {
        const embed = new EmbedBuilder()
        //.setAuthor({ name: `${interaction.user.username}'s Stats`, iconURL: interaction.user.avatarURL() })
        .setColor("Aqua")
        .setThumbnail(interaction.user.avatarURL())
        .setTitle("Server Profile Statistics")
        .setDescription(`Hello there, \`${interaction.user.username}\`! You are currently looking at your profile stats for the server \`${interaction.guild.name}\`!`)
        .addFields(
            { name: "⭐ Reputation", value: "***8.67/10***", inline: true },
            { name: "👏 Applauses Received", value: "***21 Awarded***", inline: true },
            { name: "🏆 Current Rank", value: "***TOP 4***", inline: true }
        )
        //.setImage("https://media.tenor.com/7XwcFNembSoAAAAC/bocchi-the-rock-hitori-gotoh.gif")
        .setFooter({ text: "Embed created using Sapphire", iconURL: client.user.avatarURL() })
        .setTimestamp();

        interaction.reply({ embeds: [embed] });
    }
});

client.login(config.token);

