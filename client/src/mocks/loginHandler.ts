import { rest } from "msw";

interface LoginBody {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  id: string;
}

export const loginHandler = rest.post<LoginBody, LoginResponse>(
  `/api/users/signin`,
  (req, res, ctx) => {
    const testPassword = "test";
    const { email, password } = req.body;
    if (password !== testPassword) {
      return res(
        ctx.json({
          email: "error",
          id: "lkjsd",
        })
      );
    }

    return res(
      ctx.json({
        email,
        id: "614aa2be1849a35943840d89",
      })
    );
  }
);
