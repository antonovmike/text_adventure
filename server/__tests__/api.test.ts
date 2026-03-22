import { describe, test, expect } from "@jest/globals";
import request from "supertest";

import app from "../src/server.js";

describe("API", () => {
  test("GET /state returns start node", async () => {
    const res = await request(app).get("/state");
    expect(res.status).toBe(200);
    expect(res.body.id).toBe("start");
  });

  test("POST /choice with index=0 returns msg1", async () => {
    const res = await request(app).post("/choice").send({ index: 0 });
    expect(res.status).toBe(200);
    expect(res.body.id).toBe("msg1");
  });
});
