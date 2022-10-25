const { default: mongoose } = require("mongoose");

const QueueSchema = new mongoose.Schema({
    fuel: {
        type: mongoose.Types.ObjectId,
        ref: "Fuel"
    },
    station: {
        type: mongoose.Types.ObjectId,
        ref: "Station"
    },
    customers: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true });

const Queue = mongoose.model('Queue', QueueSchema);
module.exports = Queue;