const express = require("express");
const router = express.Router();
const Likes = require("../models/Likes");

router.post("/", async (req, res) => {
  const { email, movie_cd, movie_id, movie_seq } = req.body;

  try {
    await Likes.create({ email, movie_cd, movie_id, movie_seq });
    const likes = await Likes.find({ email });
    res.status(200).json({ likes });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/", async (req, res) => {
  const { email, movie_cd } = req.body;

  try {
    await Likes.deleteMany({ email, movie_cd });
    res.status(200).json({ message: "좋아요 취소" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
