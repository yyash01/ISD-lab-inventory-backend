const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/Users.js");
const adminRoutes = require("./routes/Admin.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

//MongoDb Connection
connectDB();

app.use(cors());
app.use(express.json());

//routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
