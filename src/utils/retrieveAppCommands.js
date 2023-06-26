module.exports = async (client, homeGuildID) => {
    let appCmds;

    // Test/debug purposes, will be implemented differently later...
    if (homeGuildID) {
        const guild = await client.guilds.fetch(homeGuildID);
        appCmds = guild.commands;
    } else {
        appCmds = await client.application.commands;
    }

    await appCmds.fetch();
    return appCmds;
};