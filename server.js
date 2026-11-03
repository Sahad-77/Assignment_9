require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.use(express.static("public"));

// Database connection
connectDB();

// Authentication routes
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("Server Running Successfully");
    console.log(`http://localhost:${PORT}`);
    console.log("--------------------------------");
});