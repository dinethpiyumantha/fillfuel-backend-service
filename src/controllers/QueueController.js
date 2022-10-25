const QueueService = require("../services/QueueService");

module.exports = QueueController = {
    all: async (req, res) => {
        let queues = await QueueService.all();
        res.json(queues);
    },
    create: async (req, res) => {
        let queue = await QueueService.create(req.body);
        res.json(queue);
    },
    addCustomerToQueue: async (req, res) => {
        let queue = await QueueService.addCustomerToQueue(req.params.queueId, req.body);
        res.json(queue);
    },
    removeCustomerFromQueue: async (req, res) => {
        let queue = await QueueService.removeCustomerFromQueue(req.params.queueId, req.body);
        res.json(queue);
    },
    customerCount: async (req, res) => {
        let count = await QueueService.customerCount(req.params.queueId);
        res.json({ result: count });
    }
}