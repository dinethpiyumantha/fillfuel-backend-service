const Station = require("../models/Station");

module.exports = StationService = {
    all: async () => {
        let stations = await Station.find().populate("fuels");
        return stations;
    },
    getById: async (stationId) => {
        let station = await Station.findById(stationId).populate("fuels");
        return station;
    },
    create: async (station) => {
        let insertedStation = await Station.insert(station).populate("fuels");
        return insertedStation;
    },
    remove: async (stationId) => {
        let stations = await Station.findByIdAndRemove(stationId).populate("fuels");
        return stations;
    },
    update: async (stationId, station) => {
        let updatedStation = await Station.findByIdAndUpdate(stationId, station).populate("fuels");
        return updatedStation;
    },
    arriveFuel: async (stationId, fuelId) => {
        let station = await Station.findOneAndUpdate(
            {"_id": stationId, "fuelTime._id": fuelId},
            {
                "$set": {
                    "fuelTime.$.arrival": Date.now(),
                    "fuelTime.$.empty": "",
                    "fuelTime.$.status": "true"
                }
            }
        ).populate("fuels");
        return station;
    },
    emptyFuel: async (stationId, fuelId) => {
        let station = await Station.findOneAndUpdate(
            {"_id": stationId, "fuelTime._id": fuelId},
            {
                "$set": {
                    "fuelTime.$.empty": Date.now(),
                    "fuelTime.$.status": "false"
                }
            }
        ).populate("fuels");
        return station;
    }
}