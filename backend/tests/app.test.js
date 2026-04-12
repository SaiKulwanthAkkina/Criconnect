const request = require("supertest");
const app = require("../src/app");

describe("Backend API Tests", () => {

  test("GET / should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("GET /api/status should return success", async () => {
    const res = await request(app).get("/api/status");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

});