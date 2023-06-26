const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'profile',
    description: 'Displays a detailed view of your server profile statistics',
    version: '0.0.1',
    isPublic: false,
    isEnabled: true,

    callback: (client, interaction) => {
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
};