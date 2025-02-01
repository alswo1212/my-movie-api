const express = require("express");
const router = express.Router();
const Reviews = require("../models/Reviews");

const getReviews = async (movie_cd) => {
  const reviews = await Reviews.find({ movie_cd });
  reviews.forEach(rv => rv._id = rv._id.toString());
  return reviews;
}

router.get("/:movieCd", async (req, res) => {
  const { movieCd } = req.params;
  const reviews = await getReviews(movieCd);
  res.status(200).json(reviews);
});

router.post("/:movieCd", async (req, res) => {
  const { movieCd } = req.params;
  const { writer, content } = req.body;
  const review = await Reviews.create({
    writer, content,
    movie_cd: movieCd,
  });
  console.log(review);

  const reviews = await getReviews(movieCd);
  res.status(200).json(reviews);
});

router.put("/:movie_cd/:id", async (req, res) => {
  const { movie_cd, id } = req.params;
  const { content } = req.body;

  await Reviews.updateOne({ _id: id }, { content });
  const reviews = await getReviews(movie_cd);
  res.status(200).json(reviews);
});

router.delete("/:movie_cd/:id", async (req, res) => {
  const { movie_cd, id } = req.params;

  await Reviews.deleteOne({ _id: id });
  const reviews = await getReviews(movie_cd);
  res.status(200).json(reviews);
});

module.exports = router;