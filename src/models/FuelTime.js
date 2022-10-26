const { default: mongoose } = require("mongoose");
const Fuel = require("./Fuel");

const FuelTimeSchema = new mongoose.Schema({
    fuel: {
        type: mongoose.Types.ObjectId,
        ref: "Fuel",
    },
    arrival: {
        type: String,
    },
    empty: {
        type: String,
    },
    status: {
        type: String,
    }
}, { timestamps: true });

const FuelTime = mongoose.model('FuelTime', FuelTimeSchema);
module.exports = FuelTime;