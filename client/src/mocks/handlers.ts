import { rest } from "msw";
import { loginHandler } from "./loginHandler";

export const handlers = [
  loginHandler,
  rest.post("/api/users/currentuser", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
