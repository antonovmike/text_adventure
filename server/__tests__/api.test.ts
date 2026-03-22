import { beforeAll, describe, test, expect } from "@jest/globals";
import request, { Test } from "supertest";

import { createApp } from "../src/server.js";
import TestAgent from "supertest/lib/agent.js";

describe("API", () => {
  let api: TestAgent<Test>;

  beforeAll(() => {
    const app = createApp("plotline.test.yaml");
    api = request(app);
  });

  test("GET /state returns start node", async () => {
    const res = await api.get("/state");
    expect(res.body.id).toBe("start");
  });

  test("POST /choice with index=0 returns msg1", async () => {
    const res = await api.post("/choice").send({ index: 0 });
    expect(res.body.id).toBe("msg1");
  });
});
