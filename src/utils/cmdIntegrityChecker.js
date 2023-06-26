module.export = (currentCmd, duplicateCmd) => {
    return currentCmd.version === duplicateCmd.version
};