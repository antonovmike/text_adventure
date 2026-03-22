import { describe, test, expect, beforeEach } from "@jest/globals";

import { GameEngine } from "../src/gameEngine.js";

describe("GameEngine", () => {
  let engine: GameEngine;

  beforeEach(() => {
    engine = new GameEngine("plotline.test.yaml");
  });

  test("loads start node", () => {
    const state = engine.getState();
    expect(state.id).toBe("start");
    expect(state.text).toBe("Initial text");
  });

  test("choice 0 leads to msg1", () => {
    engine.makeChoice(0);
    expect(engine.getState().id).toBe("msg1");
  });

  test("invalid choice throws error", () => {
    expect(() => engine.makeChoice(99)).toThrow("Wrong coice");
  });
});
