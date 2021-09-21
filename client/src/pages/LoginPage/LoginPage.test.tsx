import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";

it("renders", () => {
  render(<LoginPage />);
});

it("renders login heading", () => {
  render(<LoginPage />);

  expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
});

it("renders the form", () => {
  render(<LoginPage />);

  expect(screen.getByRole("textbox", { name: /email:/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/password:/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});
