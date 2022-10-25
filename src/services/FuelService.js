const Fuel = require("../models/Fuel");
const { logDebug } = require("../utils/logging");

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
        logDebug(fuel)
        let insertedFuel = await Fuel.create(fuel);
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