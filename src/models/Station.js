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
        ref: "Fuel",
        required: false
    }],
    queues: [{
        type: mongoose.Types.ObjectId,
        ref: "Queue",
        required: false
    }],
    fuelTime: [{
        type: mongoose.Types.ObjectId,
        ref: "FuelTime",
        required: false
    }]
}, { timestamps: true });

const Station = mongoose.model('Station', StationSchema);
module.exports = Station;