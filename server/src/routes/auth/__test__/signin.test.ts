import request from "supertest";
import { app } from "../../../app";

it("fails when an email that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "lksdfjlk",
    })
    .expect(400);
});

it("responds with a cookie when given valid credientials", async () => {
  const email = "test@test.com";
  const password = "password";
  await request(app)
    .post("/api/users/signup")
    .send({
      email,
      password,
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email,
      password,
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});

it("returns a 400 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signin")
    .send({
      email: "lkjfsj",
      password: "password",
    })
    .expect(400);
});
