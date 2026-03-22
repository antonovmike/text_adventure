import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import { GameEngine } from "./gameEngine.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const engine = new GameEngine("plotline.yaml");

app.get("/test_state", (_req, res) => {
  res.json(engine.getState());
});

app.get("/state", (_req, res) => {
  res.json(engine.getState());
});

app.post("/choice", (req, res) => {
  const { index } = req.body;
  try {
    const newState = engine.makeChoice(index);
    res.json(newState);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

export default app;
