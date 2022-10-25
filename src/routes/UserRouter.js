const express = require("express");
const FuelController = require("../controllers/FuelController");
const UserController = require("../controllers/UserController");
const constants = require("../utils/constants");
const { logInfo } = require("../utils/logging");
const { reqToString } = require("../utils/stringUtils");
const router = express.Router();

router.use((req, res, next) => {
    logInfo(`${constants.REQUEST_RECIEVED} (User) => ${reqToString(req)}`);
    logInfo("Fuel middleware in");
    next();
    logInfo(`${constants.REQUEST_TERMINATED} (User)}`);
});

router.get(`/`, async (req, res) => {
    await UserController.all(req, res);
});

router.post(`/`, async (req, res) => {
    await UserController.create(req, res);
});

router.put(`/:id`, async (req, res) => {
    await UserController.update(req, res);
});

router.delete(`/:id`, async (req, res) => {
    await UserController.remove(req, res);
});

router.get(`/:id`, async (req, res) => {
    await UserController.getById(req, res);
});

router.get(`/join/:id`, async (req, res) => {
    await UserController.joinToQueue(req, res);
});

router.get(`/exit/:id`, async (req, res) => {
    await UserController.exitFromQueue(req, res);
});

module.exports = router;