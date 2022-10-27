const mongoose = require("mongoose");
const { logInfo, logError } = require("../utils/logging");

const mongoodbConnect = async () => {
    try {
        mongoose.connect(
            process.env.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        logInfo("Mongodb connection established.");
    } catch (err) {
        logError("Mongodb connection faild");
    }
};

module.exports = {
    mongoodbConnect
}