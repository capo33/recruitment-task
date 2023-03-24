import "dotenv/config";
import express from "express";

import env from "./utils/validateEnv";
import companyPSRoutes from "./routes/companyPS.routes";

// Create instance of express app
const app = express();

// Port number is set in the .env file
const port = env.PORT || 5000;

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the PostgreSQL API",
    author: "Mohamed Capo",
    version: "1.0.0",
  });
});

//====================== Route handler ==============================//
app.use("/", companyPSRoutes);

// Listen to port
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
