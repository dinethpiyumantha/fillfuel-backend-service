const moment = require("moment")

const FORMAT = "YYYY-MM-DD HH:mm:ss";

const logInfo = (msg) => {
    console.log('\x1b[36m%s\x1b[0m', `${moment(new Date()).format(FORMAT)} | INFO  | ${msg}`);
}

const logWarn = (msg) => {
    console.log('\x1b[33m%s\x1b[0m', `${moment(new Date()).format(FORMAT)} | WARN  | ${msg}`);
}

const logDebug = (msg) => {
    console.log('\x1b[35m%s\x1b[0m', `${moment(new Date()).format(FORMAT)} | DEBUG | ${msg}`);
}

const logError = (msg) => {
    console.log('\x1b[31m%s\x1b[0m', `${moment(new Date()).format(FORMAT)} | ERROR | ${msg}`);
}

module.exports = {
    logInfo,
    logDebug,
    logWarn,
    logError
}