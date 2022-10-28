const express = require("express");
const QueueController = require("../controllers/QueueController");
const constants = require("../utils/constants");
const { logInfo } = require("../utils/logging");
const { reqToString } = require("../utils/stringUtils");
const router = express.Router();

router.use((req, res, next) => {
    logInfo(`${constants.REQUEST_RECIEVED} (Queue) => ${reqToString(req)}`);
    logInfo("Queue middleware in");
    next();
    logInfo(`${constants.REQUEST_TERMINATED} (Queue)}`);
});

router.get(`/`, async (req, res) => {
    await QueueController.all(req, res);
});

router.post(`/`, async (req, res) => {
    await QueueController.create(req, res);
});

router.put(`/add/:queueId`, async (req, res) => {
    await QueueController.create(req, res);
});

router.put(`/add/:queueId/:custId`, async (req, res) => {
    await QueueController.addCustomerToQueue(req, res);
});

router.get(`/count/:queueId`, async (req, res) => {
    await QueueController.customerCount(req, res);
});

module.exports = router;