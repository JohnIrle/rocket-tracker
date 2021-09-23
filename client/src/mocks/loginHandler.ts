import { rest } from "msw";

interface LoginBody {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  id: string;
}

interface LoginError {
  errors: { message: string; field: string }[];
}

type ResponseTypes = LoginResponse | LoginError;

const emailError = {
  message: "Email must be valid",
  field: "email",
};
const passwordError = {
  message: "You must supply a password",
  field: "password",
};
const wrongPasswordError = {
  message: "Invalid credentials",
  field: "password",
};

export const loginHandler = rest.post<LoginBody, ResponseTypes>(
  `/api/users/signin`,
  (req, res, ctx) => {
    const testPassword = "test";
    const { email, password } = req.body;
    const errors = [
      ...(!email ? [emailError] : []),
      ...(!password ? [passwordError] : []),
      ...(password !== testPassword ? [wrongPasswordError] : []),
    ];
    if (!email || !password) {
      return res(
        ctx.status(400),
        ctx.json({
          errors: [...errors],
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
