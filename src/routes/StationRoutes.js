const express = require("express");
const StationController = require("../controllers/StationController");
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
    await StationController.all(req, res);
});

router.post(`/`, async (req, res) => {
    await StationController.create(req, res);
});

router.put(`/:id`, async (req, res) => {
    await StationController.update(req, res);
});

router.delete(`/:id`, async (req, res) => {
    await StationController.remove(req, res);
});

router.get(`/:id`, async (req, res) => {
    await StationController.getById(req, res);
});

module.exports = router;