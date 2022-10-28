const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    nic: {
        type: String,
    },
    name: {
        type: String,
    },
    vehicle: {
        type: String,
    },
    queue: {
        type: mongoose.Types.ObjectId,
        ref: "Queue",
        required: false
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;