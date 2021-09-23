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
  message: "Invalid Credentials",
  field: "password",
};

export const loginHandler = rest.post<LoginBody, ResponseTypes>(
  `/api/users/signin`,
  (req, res, ctx) => {
    const testPassword = "test";
    const { email, password } = req.body;

    const isWrongPassword = password !== "" && password !== testPassword;
    const isError = !email || !password || password !== testPassword;

    const errors = [
      ...(!email ? [emailError] : []),
      ...(!password ? [passwordError] : []),
      ...(isWrongPassword ? [wrongPasswordError] : []),
    ];
    if (isError) {
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
