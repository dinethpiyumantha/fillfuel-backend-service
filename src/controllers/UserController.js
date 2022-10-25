const UserService = require("../services/UserService");

module.exports = UserController = {
    all: async (req, res) => {
        let users = await UserService.all();
        res.json(users);
    },
    login: async (req, res) => {
        let user = await UserService.login();
        res.json(user);
    },
    getById: async (req, res) => {
        let user = await UserService.getById(req.params.id);
        res.json(user);
    },
    create: async (req, res) => {
        let insertedUser = await UserService.create(req.body);
        res.json(insertedUser);
    },
    remove: async (req, res) => {
        let user = await UserService.remove(req.params.id);
        res.json(user);
    },
    update: async (req, res) => {
        let updatedUser = await UserService.update(req.params.id, req.body);
        res.json(updatedUser);
    },
    joinToQueue: async (req, res) => {
        let updatedUser = await UserService.joinToQueue(req.params.id, req.body.queueId);
        res.json(updatedUser);
    },
    exitFromQueue: async () => {
        let updatedUser = await UserService.exitFromQueue(req.params.id, req.body.queueId);
        res.json(updatedUser);
    }
}