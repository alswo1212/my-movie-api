const express = require("express");
const router = express.Router();
const Likes = require("../models/Likes");

router.post("/", async (req, res) => {
  const { email, movie_cd, movie_id, movie_seq } = req.body;

  try {
    const movieLike = await Likes.findOne({ email, movie_cd });

    if (!movieLike) {
      await Likes.create({ email, movie_cd, movie_id, movie_seq });
    }
    const likes = await Likes.find({ email }, {
      _id: 0, movie_cd: 1, movie_id: 1, movie_seq: 1
    });
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
