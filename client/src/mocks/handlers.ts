import { rest } from "msw";

export const handlers = [
  rest.post("/api/users/signin", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post("/api/users/currentuser", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];