const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const likesRoutes = require("./routes/likesRoutes");
const reviewsRoutes = require("./routes/reviewsRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = ["https://alswo1212.github.io", "http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());

// MongoDB 연결
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/reviews", reviewsRoutes);


// 서버 실행
app.listen(PORT, '127.0.0.1', () => console.log(`서버 실행: http://localhost:${PORT}`));
