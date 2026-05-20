// index.ts
import express from "express";

import { middleware } from "#middlewares/middlewares.js";

const app = express();
const port = process.env.PORT ?? "3000";

app.get("/", middleware, () => {
  console.log("Route handler executed");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});