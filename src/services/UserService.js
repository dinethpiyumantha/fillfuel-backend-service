const User = require("../models/User");

module.exports = UserService = {
    all: async () => {
        let users = await User.find();
        return users;
    },
    login: async () => {
        let users = await User.find();
        return users;
    },
    getById: async (userId) => {
        let user = await User.findById(userId);
        return user;
    },
    create: async (user) => {
        let insertedUser = await User.create(user);
        return insertedUser;
    },
    remove: async (userId) => {
        let users = await User.findByIdAndRemove(userId);
        return users;
    },
    update: async (userId, user) => {
        let updatedUser = await User.findByIdAndUpdate(userId, user);
        return updatedUser;
    },
    joinToQueue: async (userId, queueId) => {
        let updatedUser = await User.findOneAndUpdate(
            {"_id": userId},
            {
                "$set": {
                    "queue.$": queueId
                }
            }
        );
        return updatedUser;
    },
    exitFromQueue: async (userId, queueId) => {
        let updatedUser = await User.findOneAndUpdate(
            {"_id": userId},
            {
                "$set": {
                    "queue.$": ""
                }
            }
        );
        return updatedUser;
    }
}