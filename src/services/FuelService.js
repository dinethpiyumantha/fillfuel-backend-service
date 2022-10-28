const Fuel = require("../models/Fuel");
const { logDebug } = require("../utils/logging");
const { reqToString } = require("../utils/stringUtils");

module.exports = FuelService = {
    all: async () => {
        let fuels = await Fuel.find();
        return fuels;
    },
    getById: async (fuelId) => {
        let fuel = await Fuel.findById(fuelId);
        return fuel;
    },
    create: async (fuel) => {
        logDebug(JSON.stringify(fuel))
        const insertedFuel = await Fuel.create(fuel);
        logDebug(JSON.stringify(insertedFuel))
        return insertedFuel;
    },
    remove: async (fuelId) => {
        let fuels = await Fuel.findByIdAndRemove(fuelId);
        return fuels;
    },
    update: async (fuelId, fuel) => {
        let updatedFuel = await Fuel.findByIdAndUpdate(fuelId, fuel);
        return updatedFuel;
    },
}