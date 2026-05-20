// middlewares.ts
import type { RequestHandler } from "express";

export const middleware: RequestHandler = (req, res, next) => {
  res.send("Hello World!");
  console.log("Middleware response sent - test changed");
  next();
};