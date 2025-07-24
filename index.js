require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("tiny"));

const askRouter = require("./routes/ask.route");
app.use("/api", askRouter);

// GET endpoint to check if the server is running
app.listen(port, () => {
  console.log(`🚀 Medical AI bot is running at http://localhost:${port}`);
});
