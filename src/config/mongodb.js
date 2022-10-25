const mongoose = require("mongoose");
const { logInfo } = require("../utils/logging");

const mongoodbConnect = () => {
    mongoose.connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    logInfo("Mongodb connection established.");
};

module.exports = {
    mongoodbConnect
}