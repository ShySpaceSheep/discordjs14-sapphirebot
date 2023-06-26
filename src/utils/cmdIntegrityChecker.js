module.exports = (currentCmd, duplicateCmd) => {
    return currentCmd.version === duplicateCmd.version
};