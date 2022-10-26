const { default: mongoose } = require("mongoose");
const FuelTime = require("./FuelTime");

const StationSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    fuels: [{
        type: mongoose.Types.ObjectId,
        ref: "Fuel"
    }],
    queues: [{
        type: mongoose.Types.ObjectId,
        ref: "Queue"
    }],
    fuelTime: [{
        type: mongoose.Types.ObjectId,
        ref: "FuelTime"
    }]
}, { timestamps: true });

const Station = mongoose.model('Station', StationSchema);
module.exports = Station;