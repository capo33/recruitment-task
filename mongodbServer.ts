import "dotenv/config";
import express from "express";

import { connectToMongoDB } from "./config/mongoDB";
import env from "./utils/validateEnv";
import companyRoutes from "./routes/company.routes";

// Create instance of express app
const app = express();

// Port number is set in the .env file
const port = env.PORT || 5000;

// Connect to MongoDB
connectToMongoDB();

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    author: "Mohamed Capo",
    version: "1.0.0",
  });
});

//====================== Route handler ==============================//
app.use("/", companyRoutes);

// Listen to port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
