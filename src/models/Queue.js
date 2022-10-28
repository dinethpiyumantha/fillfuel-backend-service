const { default: mongoose } = require("mongoose");

const QueueSchema = new mongoose.Schema({
    fuel: {
        type: mongoose.Types.ObjectId,
        ref: "Fuel",
        required: false
    },
    station: {
        type: mongoose.Types.ObjectId,
        ref: "Station",
        required: false
    },
    customers: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: false
    }]
}, { timestamps: true });

const Queue = mongoose.model('Queue', QueueSchema);
module.exports = Queue;