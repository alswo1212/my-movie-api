const mongoose = require("mongoose");

const LikesSchema = new mongoose.Schema({
  email: { type: String, required: true },
  movie_cd: { type: String, required: true },
  movie_id: { type: String, required: true },
  movie_seq: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Likes", LikesSchema);