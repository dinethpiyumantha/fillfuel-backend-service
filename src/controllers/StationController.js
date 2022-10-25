const StationService = require("../services/StationService");

module.exports = StationController = {
    all: async (req, res) => {
        let stations = await StationService.all();
        res.json(stations);
    },
    getById: async (req, res) => {
        let station = await StationService.getById(req.params.id);
        res.json(station);
    },
    create: async (req, res) => {
        let station = await StationService.create(req.body);
        res,json(station);
    },
    remove: async (req, res) => {
        let stations = await StationService.remove(req.params.id);
        res.json(stations);
    },
    update: async (req, res) => {
        let station = await StationService.update(req.params.id, req.body);
        res.json(station);
    },
    arriveFuel: async (req, res) => {
        let station = await StationService.arriveFuel(req.params.id, req.body);
        res.json(station);
    },
    emptyFuel: async (req, res) => {
        let station = await StationService.emptyFuel(req.params.id, res.body);
        res.json(station);
    }
}