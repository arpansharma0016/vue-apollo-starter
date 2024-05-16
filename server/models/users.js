const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String
});

const users = mongoose.model("users", userSchema);
module.exports = {users};