const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log('try connect', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connect success');

  } catch (err) {
    process.exit(1);
  }
};

module.exports = connectDB;
