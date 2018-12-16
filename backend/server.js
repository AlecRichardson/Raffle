require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");

// Import routes
const users = require("./Routes/api/users");
const tutors = require("./Routes/api/tutors");

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

/* * * * DB CONFIG * * * */
const db = process.env.MONGO_URI;
mongoose.set("useCreateIndex", true);
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useMongoClient: true }
  )
  .then(() => console.log("=== Connected to MongoDB ===\n"))
  .catch(err => console.log(err));

/* * * * * API ROUTES * * * * * */

app.use("/api/users", users);
app.use("/api/tutors", tutors);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`\nServer is running on port ${port}`));
