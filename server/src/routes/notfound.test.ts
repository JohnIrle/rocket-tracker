import request from "supertest";
import { app } from "../app";

it("sends a 404 when the route doesn't exist", async () => {
  await request(app).post("/anything").expect(404);
});
