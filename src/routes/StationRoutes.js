const express = require("express");
const FuelController = require("../controllers/FuelController");
const constants = require("../utils/constants");
const { logInfo } = require("../utils/logging");
const { reqToString } = require("../utils/stringUtils");
const router = express.Router();

router.use((req, res, next) => {
    logInfo(`${constants.REQUEST_RECIEVED} (Fuel) => ${reqToString(req)}`);
    logInfo("Fuel middleware in");
    next();
    logInfo(`${constants.REQUEST_TERMINATED} (Fuel)}`);
});

router.get(`/`, async (req, res) => {
    await FuelController.all(req, res);
});

router.post(`/`, async (req, res) => {
    await FuelController.create(req, res);
});

router.put(`/:id`, async (req, res) => {
    await FuelController.update(req, res);
});

router.delete(`/:id`, async (req, res) => {
    await FuelController.delete(req, res);
});

router.get(`/:id`, async (req, res) => {
    await FuelController.getById(req, res);
});

module.exports = router;