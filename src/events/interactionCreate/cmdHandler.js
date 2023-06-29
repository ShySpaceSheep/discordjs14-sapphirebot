const { homeGuildID } = require('../../config.json');
const retrieveLocalCmds = require('../../utils/retrieveLocalCommamds');

module.exports = async (client, interaction) => {
    const localCmds = retrieveLocalCmds();
    if(interaction.isChatInputCommand()) {
        try {
            const cmdObj = localCmds.find((cmd) => cmd.name === interaction.commandName);
            await cmdObj.callback(client, interaction);
        } catch (error) {
            console.log("ERROR");
        }
    }
};