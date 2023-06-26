const { homeGuildID } = require('../../config.json');
const retrieveLocalCmds = require('../../utils/retrieveLocalCommamds');
const retrieveAppCmds = require('../../utils/retrieveAppCommands');
const cmdUpdated = require('../../utils/cmdIntegrityChecker');

module.exports = async (client) => {
    console.log(`\u001b[1;33m[TASK] Registering all available slash commands...`, `\u001b[0m`);
    try {
        const localCmds = retrieveLocalCmds();
        const applicationCmds = await retrieveAppCmds(client, homeGuildID);

        for (const localCmd of localCmds) {
            const { name, description, version } = localCmd;
            const duplicateCmd = await applicationCmds.cache.find(
                (cmd) => cmd.name === name
            );

            if (duplicateCmd) {
                if (cmdUpdated(duplicateCmd, localCmd)) {
                    console.log(`\u001b[1;33m[WARN] Found version discrepancy on slash command "${name}": ${duplicateCmd.version} vs. ${version}`, `\u001b[0m`);
                    await applicationCmds.edit(duplicateCmd.id, { description, version });
                    console.log(`\u001b[1;32m[SUCCESS] Resolved version discrepancy, updated "${name}" command to newest version ${version}!`, `\u001b[0m`);
                }
                console.log(`\u001b[1;33m[STATUS] ${name} is up-to-date, using that...`, `\u001b[0m`);
            } else {
                await applicationCmds.create({ name, description, version });
                console.log(`\u001b[1;32m[STATUS] Successfully registered "${name}" as a new slash command!`, `\u001b[0m`);
            }
        }
        console.log(`\u001b[1;32m[STATUS] Registered all available slash commands!`, `\u001b[0m`);
    } catch (error) {
        console.log(`\u001b[1;31m[ERROR] Could not complete command registration due to: ${error}`, `\u001b[0m`);
    }
};