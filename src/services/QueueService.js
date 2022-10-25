const Queue = require("../models/Queue");
const User = require("../models/User");
const { logError } = require("../utils/logging");

module.exports = QueueService = {
    all: async () => {
        let queues = await Queue.find().populate("customers").populate("fuel").populate("station");
        return queues;
    },
    create: async (queue) => {
        let insertedQueue = await Queue.insert(queue).populate("customers").populate("fuel").populate("station");
        return insertedQueue;
    },
    addCustomerToQueue: async (queueId, user) => {
        let queue = await Queue.findById(queueId).populate("customers").populate("fuel").populate("station");
        queue.customers.push(user);
        return await queue.save();
    },
    removeCustomerFromQueue: async (queueId, user) => {
        let queue = await Queue.findById(queueId).populate("customers").populate("fuel").populate("station");
        let indexOfElement = queue.customers.findIndex(el => {
            return user._id === el._id;
        });
        queue.splice(indexOfElement, 1);
        return await queue.save();
    },
    customerCount: async (queueId) => {
        let queue = await Queue.findById(queueId);
        return queue.customers.length;
    }
}