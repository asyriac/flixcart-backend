const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// cookie parser setup
app.use(cookieParser());

// body parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors setup
app.use(
  cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL],
    optionsSuccessStatus: 200,
  })
);

// DB setup
const initDB = require("./db");
initDB();

// Routes setup
const routes = require("./routes/v1.routes");
app.use("/api/v1", routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
