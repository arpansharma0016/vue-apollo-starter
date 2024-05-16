const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String
});

const books = mongoose.model("books", bookSchema);
module.exports = {books};