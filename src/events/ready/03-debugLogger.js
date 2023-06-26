module.exports = (client) => {
    console.log(`\u001b[1;33m[TASK] Finalizing and starting Sapphire...`, `\u001b[0m`);
    try {
        console.log(`\u001b[1;32m[STATUS] ${client.user.tag } has succesfully initialized and is now online!`, "\u001b[0m");
    } catch (error) {
        console.log(`\u001b[1;31m[ERROR] ${client.user.tag } has failed to initialized due to ${error}`, "\u001b[0m")
    }
};