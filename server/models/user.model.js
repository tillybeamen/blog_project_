const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username is required"],
        minlength: [4, "Username must be at least 4 characters"],
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        default: "",
    },

},
{timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);