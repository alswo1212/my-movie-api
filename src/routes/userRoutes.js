const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Likes = require("../models/Likes");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      await User.create({ email, password });
      res.status(200).json({ email, likes: [] });
      return;
    }

    if (user.password !== password) {
      res.status(200).json({ message: "이메일과 비밀번호를 확인해주세요." });
      return;
    }

    const likes = await Likes.find({ email });
    res.status(200).json({ email, likes });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
