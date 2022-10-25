const FuelService = require("../services/FuelService");
const { logDebug } = require("../utils/logging");

module.exports = FuelController = {
    all: async (req, res) => {
        let fuels = await FuelService.all();
        res.json(fuels);
    },
    getById: async (req, res) => {
        let fuel = await FuelService.getById(req.params.id);
        res.json(fuel);
    },
    create: async (req, res) => {
        let fuel = await FuelService.create(req.body);
        res.json(fuel);
    },
    remove: async (req, res) => {
        let fuel = await FuelService.remove(req.params.id);
        res.json(fuel);
    },
    update: async (req, res) => {
        let fuel = await FuelService.update(req.params.id, req.body);
        res.json(fuel);
    }
}