const { default: mongoose } = require("mongoose");

const FuelSchema = new mongoose.Schema({
    name: {
        type: String,
    },
}, { timestamps: true });

const Fuel = mongoose.model('Fuel', FuelSchema);
module.exports = Fuel;