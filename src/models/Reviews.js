const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
  writer: { type: String, required: true },
  movie_cd: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Reviews", ReviewsSchema);