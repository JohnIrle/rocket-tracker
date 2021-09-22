import { rest } from "msw";

export const handlers = [
  rest.post(`/api/users/signin`, (req, res, ctx) => {
    return res(
      ctx.json({
        email: "test@test.com",
        id: "614aa2be1849a35943840d89",
      })
    );
  }),

  rest.post("/api/users/currentuser", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
