import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { GameEngine } from "./gameEngine.js";

export function createApp(filePath: string = "plotline.yaml") {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  const engine = new GameEngine(filePath);

  app.get("/state", (_req, res) => res.json(engine.getState()));
  app.post("/choice", (req, res) => {
    const { index } = req.body;
    try {
      const newState = engine.makeChoice(index);
      res.json(newState);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  });

  return app;
}
